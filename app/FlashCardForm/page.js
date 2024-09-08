import { Box, Typography, Button, Grid } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#000', color: '#fff' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to AI Flashcard SaaS
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Effortlessly create flashcards using artificial intelligence
          </Typography>
        </Box>
      </header>

      <main>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Link href="/flashcardform" passHref>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, mr: 2 }}
            >
              Get Started
            </Button>
          </Link>
          <Link href="/featurelist" passHref>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
            >
              Learn More
            </Button>
          </Link>
        </Box>

        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', color: '#000' }}>
            Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  AI-Powered Flashcard Generation
                </Typography>
                <Typography>
                  Automatically generate flashcards from your notes using advanced AI algorithms. Save time and improve your study efficiency with intelligent flashcard creation.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Personalized Flashcards
                </Typography>
                <Typography>
                  Customize your flashcards according to your preferences. Adjust difficulty, format, and layout to fit your learning style.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  Spaced Repetition Algorithm
                </Typography>
                <Typography>
                  Improve retention with our spaced repetition system that schedules reviews based on when you’re likely to forget.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 6, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Pricing
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Basic Plan
                </Typography>
                <Typography>
                  $10/month - Access to basic features including AI-powered flashcard generation and offline access.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Premium Plan
                </Typography>
                <Typography>
                  $20/month - Includes all Basic Plan features plus personalized recommendations, advanced study modes, and more.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </main>

      <footer>
        <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#000', color: '#fff' }}>
          <Typography variant="body2">© 2024 AI Flashcard SaaS. All rights reserved.</Typography>
        </Box>
      </footer>
    </div>
  );
}
