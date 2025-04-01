import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  styled,
} from '@mui/material';
import { Upload as UploadIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { pdfService } from '../services/pdfService';

const StyledUploadBox = styled(Box)`
  border: 2px dashed #8b0000;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  background-color: rgba(139, 0, 0, 0.03);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(139, 0, 0, 0.06);
  }
`;

interface RuleSetManagerProps {
  onRuleSetSelected: (ruleSetId: string) => void;
}

const RuleSetManager: React.FC<RuleSetManagerProps> = ({ onRuleSetSelected }) => {
  const [ruleSets, setRuleSets] = useState<any[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const newRuleSet = await pdfService.uploadPDF(file);
      setRuleSets([...ruleSets, newRuleSet]);
      setOpenDialog(false);
    } catch (error) {
      console.error('Error uploading file:', error);
      // Here you would typically show an error message to the user
    }
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      try {
        const newRuleSet = await pdfService.uploadPDF(file);
        setRuleSets([...ruleSets, newRuleSet]);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={() => setOpenDialog(true)}
        startIcon={<UploadIcon />}
        sx={{
          color: '#8b0000',
          borderColor: '#8b0000',
          '&:hover': {
            borderColor: '#660000',
            backgroundColor: 'rgba(139, 0, 0, 0.04)',
          },
        }}
      >
        Upload Rule Set
      </Button>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Upload Rule Set</DialogTitle>
        <DialogContent>
          <StyledUploadBox
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="application/pdf"
              style={{ display: 'none' }}
            />
            <UploadIcon sx={{ fontSize: 48, color: '#8b0000', mb: 2 }} />
            <Typography variant="body1">
              Drag and drop a PDF here, or click to select
            </Typography>
          </StyledUploadBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {ruleSets.length > 0 && (
        <List sx={{ mt: 2 }}>
          {ruleSets.map((ruleSet) => (
            <ListItem
              key={ruleSet.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              sx={{
                border: '1px solid rgba(139, 0, 0, 0.2)',
                borderRadius: 1,
                mb: 1,
              }}
            >
              <ListItemText
                primary={ruleSet.name}
                secondary={`Uploaded: ${ruleSet.uploadDate.toLocaleDateString()}`}
                onClick={() => onRuleSetSelected(ruleSet.id)}
                sx={{ cursor: 'pointer' }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default RuleSetManager;
