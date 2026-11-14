// Browser side of the voice agent.
// It never talks to Sarvam directly: it only calls this app's /ask and /ask_voice,
// so the Sarvam API key stays on your computer (in .env) and never reaches the page.
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const messagesEl = $('messages');
  const inputEl = $('userInput');
  const sendBtn = $('sendBtn');
  const micBtn = $('micBtn');
  const voiceSelect = $('voiceSelect');

  let recorder = null;
  let chunks = [];
  let busy = false;

  // Everything is added with textContent, never innerHTML, so text from the PDF or the
  // model can't inject HTML into the page.
  function addMsg(text, cls) {
    const el = document.createElement('div');
    el.className = 'msg ' + cls;
    el.textContent = text;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
  }

  function setBusy(on) {
    busy = on;
    sendBtn.disabled = on;
    micBtn.disabled = on && !recorder;
  }

  function renderAnswer(data) {
    const el = addMsg(data.answer || 'No answer.', 'agent');
    if (Array.isArray(data.sources) && data.sources.length) {
      const pages = [...new Set(data.sources.map((s) => s.page))];
      const src = document.createElement('div');
      src.className = 'sources';
      src.textContent = 'Sources: page ' + pages.join(', ');
      el.appendChild(src);
    }
    if (data.audio_b64) {
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.src = 'data:audio/wav;base64,' + data.audio_b64;
      el.appendChild(audio);
      audio.play().catch(() => {});   // browsers may block autoplay; the player is still there
    }
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  async function post(url, body) {
    const res = await fetch(url, { method: 'POST', body });
    const data = await res.json().catch(() => ({ answer: 'Sorry, something went wrong.' }));
    return { ok: res.ok, data };
  }

  async function sendText() {
    const q = inputEl.value.trim();
    if (!q || busy) return;
    inputEl.value = '';
    addMsg(q, 'user');
    const thinking = addMsg('Thinking...', 'system');
    setBusy(true);
    try {
      const body = new FormData();
      body.append('question', q);
      body.append('voice', voiceSelect.value);
      const { ok, data } = await post('/ask', body);
      thinking.remove();
      ok ? renderAnswer(data) : addMsg(data.answer, 'error');
    } catch (err) {
      thinking.remove();
      addMsg('Could not reach the app. Is it still running?', 'error');
    } finally {
      setBusy(false);
    }
  }

  async function sendAudio(blob) {
    const thinking = addMsg('Listening and thinking...', 'system');
    setBusy(true);
    try {
      const body = new FormData();
      body.append('audio', blob, 'question.webm');
      body.append('voice', voiceSelect.value);
      const { ok, data } = await post('/ask_voice', body);
      thinking.remove();
      if (!ok) { addMsg(data.answer, 'error'); return; }
      addMsg('"' + data.question + '"', 'heard');
      renderAnswer(data);
    } catch (err) {
      thinking.remove();
      addMsg('Could not reach the app. Is it still running?', 'error');
    } finally {
      setBusy(false);
    }
  }

  async function toggleMic() {
    if (recorder && recorder.state === 'recording') { recorder.stop(); return; }
    if (busy) return;
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      addMsg('Microphone blocked. Allow it in your browser (address bar icon) and try again.', 'error');
      return;
    }
    chunks = [];
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      micBtn.classList.remove('recording');
      micBtn.textContent = 'Mic';
      const type = recorder.mimeType || 'audio/webm';
      recorder = null;
      sendAudio(new Blob(chunks, { type }));
    };
    recorder.start();
    micBtn.classList.add('recording');
    micBtn.textContent = 'Stop';
  }

  function fillVoices(voices, current) {
    Object.entries(voices).forEach(([group, names]) => {
      const og = document.createElement('optgroup');
      og.label = group;
      names.forEach((n) => {
        const o = document.createElement('option');
        o.value = n;
        o.textContent = n.charAt(0).toUpperCase() + n.slice(1);
        if (n === current) o.selected = true;
        og.appendChild(o);
      });
      voiceSelect.appendChild(og);
    });
  }

  async function init() {
    try {
      const cfg = await (await fetch('/config')).json();
      const a = cfg.assistant;
      document.title = a.title;
      $('title').textContent = a.title;
      $('subtitle').textContent = a.subtitle;
      fillVoices(cfg.voices, cfg.default_voice);
      addMsg(a.welcome, 'system');
      (a.sample_questions || []).forEach((q) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'sample';
        b.textContent = q;
        b.addEventListener('click', () => { inputEl.value = q; inputEl.focus(); });
        $('samples').appendChild(b);
      });
      const health = await (await fetch('/health')).json();
      if (!health.has_key) addMsg('SARVAM_API_KEY is missing. Add it to .env and restart the app.', 'error');
      else if (!health.indexed) addMsg('No PDF found. Put one in the data/ folder and restart the app.', 'error');
    } catch (err) {
      addMsg('Could not load settings from the app.', 'error');
    }
  }

  sendBtn.addEventListener('click', sendText);
  inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendText(); });
  micBtn.addEventListener('click', toggleMic);
  init();
})();
