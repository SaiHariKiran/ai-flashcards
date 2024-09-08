// app/payment/page.js
import { Box, Typography, TextField, Button, Container, Paper } from '@mui/material';
import Link from 'next/link';

export default function Payment() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Payment Information
          </Typography>
          <Typography variant="body1" component="p">
            Please enter your payment details to complete the purchase.
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Card Number"
            variant="outlined"
            required
            fullWidth
            placeholder="1234 5678 9012 3456"
            sx={{ backgroundColor: '#fff' }}
          />
          <TextField
            label="Name on Card"
            variant="outlined"
            required
            fullWidth
            placeholder="John Doe"
            sx={{ backgroundColor: '#fff' }}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Expiration Date"
              variant="outlined"
              required
              fullWidth
              placeholder="MM/YY"
              sx={{ backgroundColor: '#fff' }}
            />
            <TextField
              label="CVV"
              variant="outlined"
              required
              fullWidth
              placeholder="123"
              sx={{ backgroundColor: '#fff' }}
            />
          </Box>
          
          <Button variant="contained" color="primary" sx={{ mt: 2, borderRadius: 8 }}>
            Complete Purchase
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Link href="/" passHref>
            <Button variant="outlined" color="primary">
              Back to Home
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}


