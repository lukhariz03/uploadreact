import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
} from '@mui/material';

import creditcard from './700.jpg'

function Cards() {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
      <CardItem title="Maybank Shopee Visa Platinum Credit Card" />
      <CardItem title="Maybank Grab Mastercard Platinum Credit Card" />
      <CardItem title="Maybank Islamic Ikhwan Mastercard Gold Credit Card-i" />
      <CardItem title="Maybank Visa Classic" />
    </Container>
  );
}

function CardItem({ title }) {
  return (
    <Paper elevation={3} sx={{ padding: '20px', flex: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={creditcard} alt={title} style={{ width: '200px' }} />
        <Typography variant='h6' align='center' mt={1}>{title}</Typography>
      </Box>
    </Paper>
  );
}

export default Cards;
