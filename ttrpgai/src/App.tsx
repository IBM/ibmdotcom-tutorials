import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  styled,
  Tabs,
  Tab,
} from '@mui/material';
import { ollamaService } from './services/ollama';
import RuleSetManager from './components/RuleSetManager';
import { pdfService, RuleSet } from './services/pdfService';

const StyledContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f5f5f5;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/assets/parchment-bg.svg') no-repeat center center fixed;
    background-size: cover;
    opacity: 0.4;
    z-index: -1;
  }
`;

const StyledPaper = styled(Paper)`
  position: relative;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #8b0000;
  margin-top: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled(Typography)`
  color: #8b0000;
  font-family: 'MedievalSharp', cursive;
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledResponseContainer = styled(Box)`
  background-color: rgba(139, 0, 0, 0.03);
  border-left: 3px solid #8b0000;
  padding: 16px;
  border-radius: 4px;
  white-space: pre-line;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
`;

const formatResponse = (text: string) => {
  // Replace multiple newlines with two newlines to avoid excessive spacing
  const cleanText = text.replace(/\n{3,}/g, '\n\n');
  
  // Split into paragraphs and format each one
  return cleanText.split('\n\n').map((paragraph, index) => {
    // Check if the paragraph is a list item
    const isList = paragraph.trim().match(/^[•\-\*]\s/);
    
    return (
      <Typography
        key={index}
        component="div"
        sx={{
          mb: 2,
          pl: isList ? 2 : 0,
          '&:last-child': { mb: 0 }
        }}
      >
        {paragraph.trim()}
      </Typography>
    );
  });
};

const App: React.FC = () => {
  const [version, setVersion] = useState('5e');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [partySize, setPartySize] = useState('4');
  const [partyLevel, setPartyLevel] = useState('1');
  const [environment, setEnvironment] = useState('dungeon');
  const [encounterResult, setEncounterResult] = useState('');
  const [activeRuleSet, setActiveRuleSet] = useState<string | null>(null);
  const [ruleSets, setRuleSets] = useState<RuleSet[]>([]);

  // Load rule sets when component mounts
  useEffect(() => {
    const loadRuleSets = async () => {
      try {
        const loadedRuleSets = await pdfService.loadRuleSets();
        setRuleSets(loadedRuleSets);
      } catch (error) {
        console.error('Error loading rule sets:', error);
      }
    };
    loadRuleSets();
  }, []);

  const handleRuleSetSelected = async (ruleSetId: string) => {
    setActiveRuleSet(ruleSetId);
    const ruleSet = pdfService.getRuleSet(ruleSetId);
    if (ruleSet) {
      setVersion(ruleSet.version);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer('Consulting the ancient tomes...');
    
    try {
      let prompt = question;
      if (activeRuleSet) {
        const ruleSet = pdfService.getRuleSet(activeRuleSet);
        if (ruleSet) {
          prompt = `Using the rules from ${ruleSet.name}: ${question}`;
        }
      }
      
      const response = await ollamaService.askQuestion(prompt, version);
      setAnswer(response);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setAnswer(`Error consulting the rules: ${errorMessage}. Please check the browser console for more details.`);
      console.error('Error in handleSubmit:', error);
    }
  };

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <StyledTitle variant="h3">
          TTRPG Rules Assistant
        </StyledTitle>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: '#8b0000', mb: 2 }}>
            Manage Rule Sets
          </Typography>
          <RuleSetManager onRuleSetSelected={handleRuleSetSelected} />
          {activeRuleSet && (
            <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
              Active Rule Set: {pdfService.getRuleSet(activeRuleSet)?.name}
            </Typography>
          )}
        </Box>
        
        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Game Version</InputLabel>
            <Select
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              label="Game Version"
            >
              <MenuItem value="5e">D&D 5E</MenuItem>
              <MenuItem value="3.5">D&D 3.5</MenuItem>
              <MenuItem value="4e">D&D 4E</MenuItem>
              {ruleSets.map((ruleSet) => (
                <MenuItem key={ruleSet.id} value={ruleSet.version}>
                  {ruleSet.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            margin="normal"
            label="Ask your question"
            multiline
            rows={4}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., How does sneak attack damage work?"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: '#8b0000',
              '&:hover': {
                backgroundColor: '#660000',
              },
            }}
          >
            Ask the Sage
          </Button>

          {answer && (
            <Box sx={{ mt: 4, mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ color: '#8b0000' }}>
                  Answer:
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setAnswer('')}
                  sx={{
                    color: '#8b0000',
                    borderColor: '#8b0000',
                    '&:hover': {
                      borderColor: '#660000',
                      backgroundColor: 'rgba(139, 0, 0, 0.04)',
                    },
                  }}
                >
                  Clear Answer
                </Button>
              </Box>
              <StyledResponseContainer>
                {formatResponse(answer)}
              </StyledResponseContainer>
            </Box>
          )}
        </Box>

        {/* Random Encounter Generator */}
        <Box sx={{ mt: 4, borderTop: '2px solid #8b0000', pt: 4 }}>
          <StyledTitle variant="h4">
            Random Encounter Generator
          </StyledTitle>
          
          <Box component="form" onSubmit={async (e) => {
            e.preventDefault();
            setEncounterResult('Consulting the ancient tomes...');
            try {
              const response = await ollamaService.askQuestion(
                `Generate a D&D ${version} random encounter for ${partySize} level ${partyLevel} players in a ${environment} environment. Include a brief scenario description and enemy stats.`,
                version
              );
              setEncounterResult(response);
            } catch (error) {
              const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
              setEncounterResult(`Error generating encounter: ${errorMessage}`);
            }
          }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                type="number"
                label="Party Size"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                InputProps={{ inputProps: { min: 1, max: 10 } }}
                sx={{ flex: 1 }}
              />
              <TextField
                type="number"
                label="Party Level"
                value={partyLevel}
                onChange={(e) => setPartyLevel(e.target.value)}
                InputProps={{ inputProps: { min: 1, max: 20 } }}
                sx={{ flex: 1 }}
              />
              <FormControl sx={{ flex: 1 }}>
                <InputLabel>Environment</InputLabel>
                <Select
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                  label="Environment"
                >
                  <MenuItem value="dungeon">Dungeon</MenuItem>
                  <MenuItem value="forest">Forest</MenuItem>
                  <MenuItem value="city">City</MenuItem>
                  <MenuItem value="tavern">Tavern</MenuItem>
                  <MenuItem value="mountain">Mountain</MenuItem>
                  <MenuItem value="coastal">Coastal</MenuItem>
                  <MenuItem value="desert">Desert</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#8b0000',
                '&:hover': {
                  backgroundColor: '#660000',
                },
              }}
            >
              Generate Encounter
            </Button>

            {encounterResult && (
              <Box sx={{ mt: 4, mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ color: '#8b0000' }}>
                    Encounter:
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => setEncounterResult('')}
                    sx={{
                      color: '#8b0000',
                      borderColor: '#8b0000',
                      '&:hover': {
                        borderColor: '#660000',
                        backgroundColor: 'rgba(139, 0, 0, 0.04)',
                      },
                    }}
                  >
                    Clear Encounter
                  </Button>
                </Box>
                <StyledResponseContainer>
                  {formatResponse(encounterResult)}
                </StyledResponseContainer>
              </Box>
            )}
          </Box>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default App;
