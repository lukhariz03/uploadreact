import React, { useState } from 'react';
import LoanCalculator from './Pages/LoanCalculator'; // Import the LoanCalculator component
import Cards from './Pages/Cards';
import { ReactDOM } from 'react-dom';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { yellow, grey } from '@mui/material/colors';

import remaybankLogo from './REmaybanklogo.jpg';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showLoanCalculator, setShowLoanCalculator] = useState(false); // Add this state variable
  const [showCards, setShowCards] = useState(false); // Add this state variable

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon style={{ color: grey[900] }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: yellow[700],
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <img src={remaybankLogo} alt="Remaybank Logo" style={{ width: '80px', display: 'block', margin: '0 auto' }} />
          <List>
          <ListItem button onClick={() => setShowLoanCalculator(true)}> {/* Update this line */}
            <ListItemText primary="Financial Calculator" style={{ color: '#fff' }} />
          </ListItem>
          <ListItem button onClick={() => setShowCards(true)}>
              <ListItemText primary="Credit Cards & Debit Cards" style={{ color: '#fff' }} />
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary="Branches" style={{ color: '#fff' }} />
            </ListItem>
          </List>
          <Box sx={{ position: 'absolute', bottom: 16, left: 0, width: '100%' }}>
            <Typography variant="subtitle2" sx={{ color: grey[600], textAlign: 'center' }}>
              Your Profile
            </Typography>
            {/* Add your profile content here */}
          </Box>
        </Box>
      </Drawer>
      {/* Conditionally render LoanCalculator */}
      {showLoanCalculator && (
        <div style={{ marginTop: '20px' }}>
          <LoanCalculator />
        </div>
      )}
      {showCards && (
        <div style={{ marginTop: '20px' }}>
          <Cards />
        </div>
      )}
      
    </div>
  );
}

export default App;
