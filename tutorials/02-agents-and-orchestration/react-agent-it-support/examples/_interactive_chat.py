import textwrap
import json
from collections.abc import Generator
from typing import Callable

class InteractiveChat:
    def __init__(self, ai_service_invoke: Callable, questions: tuple[str] = None, stream: bool = False, verbose: bool = True) -> None:
        self.ai_service_invoke = ai_service_invoke
        self._ordered_list = lambda seq_: "\n".join(f"\t{i}) {k}" for i, k in enumerate(seq_, 1))
        self._delta_start = False
        self.verbose = verbose
        self.stream = stream

        self.questions = (
            (
                "I want to create a ticket",
                "Show me all of the tickets",
                "Show me only the open tickets",
                "Rank the tickets in order of urgency",
                "Find the most recent ticket"
            )
            if questions is None
            else questions
        )

        self._help_message = textwrap.dedent(
            """
        The following commands are supported:
          --> help | h : prints this help message
          --> quit | q : exits the prompt and ends the program
          --> list_questions : prints a list of available questions

        """)

    @property
    def questions(self) -> tuple:
        return self._questions

    @questions.setter
    def questions(self, q: tuple) -> None:
        self._questions = q
        self._questions_prompt = f"\tQuestions:\n{self._ordered_list(self._questions)}\n"

    def _user_input_loop(self) -> Generator[str, bool, None]:
        print(self._help_message)
        print(self._questions_prompt)
        
        while True:
            q = input("\nChoose a question or ask one of your own.\n --> ")
            yield q, "question"
            yield

    def _print_message(self, message: dict) -> None:
        header = f" {message['role'].capitalize()} Message ".center(80, '=')
        if delta := message.get("delta"):
            if not self._delta_start:
                print("\n", header)
                self._delta_start = True
            print(delta, flush=True, end="")
        else:
            print("\n", header)
            print(f"{message.get('content', message)}")

    def run(self) -> None:
        while True:
            try:
                user_loop = self._user_input_loop()
                for action, stage in user_loop:
                    if action in {"h", "help"}:
                        print(self._help_message)
                    elif action in {"q", "quit"}:
                        raise EOFError
                    elif action == "list_questions":
                        print(self._questions_prompt)
                    elif stage == "question":
                        user_message = {"content": action.strip()} if not action.isdigit() else {"content": self.questions[int(action) - 1]}
                        request_payload_json = {"messages": [{"role": "user", **user_message}]}
                        resp = self.ai_service_invoke(request_payload_json)
                        
                        if self.stream:
                            for r in resp:
                                if isinstance(r, str):
                                    r = json.loads(r)
                                for c in r["choices"]:
                                    self._print_message(c["message"])
                            self._delta_start = False
                        else:
                            resp_choices = resp.get("body", resp)["choices"]
                            choices = resp_choices if self.verbose else resp_choices[-1:]
                            for c in choices:
                                self._print_message(c["message"])
                    user_loop.send(True)
            except EOFError:
                break
