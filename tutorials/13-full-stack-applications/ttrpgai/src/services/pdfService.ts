import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export interface RuleSet {
  id: string;
  name: string;
  content: string;
  uploadDate: Date;
  version: string;
}

class PDFService {
  private ruleSets: RuleSet[] = [];

  async uploadPDF(file: File): Promise<RuleSet> {
    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('version', file.name.replace('.pdf', ''));

    try {
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const newRuleSet = response.data;
      newRuleSet.uploadDate = new Date(newRuleSet.uploadDate);
      this.ruleSets.push(newRuleSet);
      return newRuleSet;
    } catch (error) {
      console.error('Error uploading PDF:', error);
      throw new Error('Failed to upload PDF');
    }
  }

  async loadRuleSets(): Promise<RuleSet[]> {
    try {
      const response = await axios.get(`${API_URL}/rulesets`);
      this.ruleSets = response.data.map((rs: RuleSet) => ({
        ...rs,
        uploadDate: new Date(rs.uploadDate)
      }));
      return this.ruleSets;
    } catch (error) {
      console.error('Error loading rule sets:', error);
      throw new Error('Failed to load rule sets');
    }
  }

  getRuleSets(): RuleSet[] {
    return this.ruleSets;
  }

  getRuleSet(id: string): RuleSet | undefined {
    return this.ruleSets.find(set => set.id === id);
  }
}

export const pdfService = new PDFService();
