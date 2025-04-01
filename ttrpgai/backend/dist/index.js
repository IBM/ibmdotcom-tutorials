"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Configure multer for PDF upload
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path_1.default.join(__dirname, '../uploads');
        if (!fs_1.default.existsSync(uploadDir)) {
            fs_1.default.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = (0, multer_1.default)({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
            cb(new Error('Only PDF files are allowed'));
            return;
        }
        cb(null, true);
    },
});
const ruleSets = [];
app.post('/api/upload', upload.single('pdf'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const dataBuffer = fs_1.default.readFileSync(req.file.path);
        const pdfData = await (0, pdf_parse_1.default)(dataBuffer);
        const newRuleSet = {
            id: Math.random().toString(36).substr(2, 9),
            name: req.file.originalname.replace('.pdf', ''),
            content: pdfData.text,
            uploadDate: new Date(),
            version: req.body.version || req.file.originalname.replace('.pdf', '')
        };
        ruleSets.push(newRuleSet);
        // Clean up the uploaded file
        fs_1.default.unlinkSync(req.file.path);
        res.json(newRuleSet);
    }
    catch (error) {
        console.error('Error processing PDF:', error);
        res.status(500).json({ error: 'Failed to process PDF' });
    }
});
app.get('/api/rulesets', (req, res) => {
    res.json(ruleSets);
});
app.get('/api/rulesets/:id', (req, res) => {
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
