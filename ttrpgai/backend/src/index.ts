import express, { Request, Response } from 'express';
import multer, { FileFilterCallback } from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import pdf from 'pdf-parse';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Configure multer for PDF upload
const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (file.mimetype !== 'application/pdf') {
      cb(new Error('Only PDF files are allowed'));
      return;
    }
    cb(null, true);
  },
});

interface RuleSet {
  id: string;
  name: string;
  content: string;
  uploadDate: Date;
  version: string;
}

const ruleSets: RuleSet[] = [];

app.post('/api/upload', upload.single('pdf'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdf(dataBuffer);

    const newRuleSet: RuleSet = {
      id: Math.random().toString(36).substr(2, 9),
      name: req.file.originalname.replace('.pdf', ''),
      content: pdfData.text,
      uploadDate: new Date(),
      version: req.body.version || req.file.originalname.replace('.pdf', '')
    };

    ruleSets.push(newRuleSet);

    // Clean up the uploaded file
    fs.unlinkSync(req.file.path);

    res.json(newRuleSet);
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).json({ error: 'Failed to process PDF' });
  }
});

app.get('/api/rulesets', (req: Request, res: Response) => {
  res.json(ruleSets);
});

app.get('/api/rulesets/:id', (req: Request, res: Response) => {
  const ruleSet = ruleSets.find(rs => rs.id === req.params.id);
  if (!ruleSet) {
    res.status(404).json({ error: 'Rule set not found' });
    return;
  }
  res.json(ruleSet);
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
