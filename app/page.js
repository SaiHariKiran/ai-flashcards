import { Box, Typography, Grid, Button, Container, Paper } from '@mui/material';
import Link from 'next/link'; // Using Link for navigation without useRouter

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          py: 6, 
          backgroundColor: '#121212', 
          color: '#fff',
          borderRadius: 2,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          mb: 4
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
        >
          Welcome to AI Flashcard SaaS
        </Typography>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
        >
          Revolutionize the way you learn with our intelligent flashcard system
        </Typography>
        <Link href="/flashcards" passHref>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2, borderRadius: 8, fontFamily: 'Montserrat, sans-serif' }}
          >
            Get Started
          </Button>
        </Link>
        <Button 
          variant="outlined" 
          color="primary" 
          sx={{ mt: 2, borderRadius: 8, fontFamily: 'Montserrat, sans-serif' }}
        >
          Learn More
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          textAlign="center"
          sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
        >
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                AI-Powered Flashcards
              </Typography>
              <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                Generate and manage flashcards effortlessly with our advanced AI technology.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Seamless Integration
              </Typography>
              <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                Easily integrate with your favorite tools and platforms for a smoother experience.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                User-Friendly Interface
              </Typography>
              <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                Enjoy a clean, intuitive design that makes creating and studying flashcards a breeze.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          textAlign="center"
          sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
        >
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Basic Plan
              </Typography>
              <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                $10 / month
              </Typography>
              <Link href="/payment?plan=basic" passHref>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2, borderRadius: 8, fontFamily: 'Montserrat, sans-serif' }}
                >
                  Choose Plan
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Standard Plan
              </Typography>
              <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                $20 / month
              </Typography>
              <Link href="/payment?plan=standard" passHref>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2, borderRadius: 8, fontFamily: 'Montserrat, sans-serif' }}
                >
                  Choose Plan
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, textAlign: 'center' }}>
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom
                sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Premium Plan
              </Typography>
              <Typography sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                $30 / month
              </Typography>
              <Link href="/payment?plan=premium" passHref>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2, borderRadius: 8, fontFamily: 'Montserrat, sans-serif' }}
                >
                  Choose Plan
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#121212', color: '#fff' }}>
        <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          © 2024 AI Flashcard SaaS. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}
