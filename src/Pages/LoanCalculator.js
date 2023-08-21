import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from '@mui/material';

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    if (!loanAmount || !interestRate || !loanDuration) {
      alert('Please fill in all fields.');
      return;
    }

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanDuration) * 12;
    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -time));

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <Container component={Paper} elevation={3} sx={{ padding: 3, marginTop: 2 }}>
      <Typography variant="h5" gutterBottom>
        Loan Calculator
      </Typography>
      <TextField
        label="Loan Amount ($)"
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Interest Rate (%)"
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Loan Duration (years)"
        type="number"
        value={loanDuration}
        onChange={(e) => setLoanDuration(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" 
      color="primary" 
      onClick={calculateMonthlyPayment}>
        Calculate
      </Button>
      {monthlyPayment > 0 && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Monthly Payment: ${monthlyPayment}
          </Typography>
        </div>
      )}
    </Container>
  );
}

export default LoanCalculator;
