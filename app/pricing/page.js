import { Box, Typography, Grid, Button, Container, Paper, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  const handleChoosePlan = (planId) => {
    router.push(`/payment?plan=${planId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: 4,
          backgroundColor: '#282c34',
          color: '#ffffff',
          borderRadius: 2,
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          mb: 4
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Pricing Plans
        </Typography>
        <Typography variant="h6" component="p">
          Choose the plan that fits your needs
        </Typography>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 6 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h5" component="h2" gutterBottom textAlign="center">
            Features Included
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 3, borderRadius: 2, textAlign: 'center', border: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  AI-Powered Flashcards
                </Typography>
                <Typography>
                  Automatically generate and manage flashcards using advanced AI.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 3, borderRadius: 2, textAlign: 'center', border: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Integration with Tools
                </Typography>
                <Typography>
                  Seamless integration with various educational tools and platforms.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 3, borderRadius: 2, textAlign: 'center', border: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Intuitive User Interface
                </Typography>
                <Typography>
                  A user-friendly interface designed for ease of use and efficiency.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Pricing Section */}
      <Divider sx={{ my: 6 }} />
      <Box sx={{ my: 6 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h5" component="h2" gutterBottom textAlign="center">
            Pricing Plans
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 3, borderRadius: 2, textAlign: 'center', border: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Basic Plan
                </Typography>
                <Typography variant="h6" component="p">
                  $10 / month
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleChoosePlan('basic')} sx={{ mt: 2 }}>
                  Choose Plan
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 3, borderRadius: 2, textAlign: 'center', border: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Standard Plan
                </Typography>
                <Typography variant="h6" component="p">
                  $20 / month
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleChoosePlan('standard')} sx={{ mt: 2 }}>
                  Choose Plan
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 3, borderRadius: 2, textAlign: 'center', border: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Premium Plan
                </Typography>
                <Typography variant="h6" component="p">
                  $30 / month
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleChoosePlan('premium')} sx={{ mt: 2 }}>
                  Choose Plan
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
