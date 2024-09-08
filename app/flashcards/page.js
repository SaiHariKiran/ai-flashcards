import { Box, Typography, Grid, Container } from '@mui/material';
import styles from './Flashcard.module.css'; // Import CSS module for styling

export default function Flashcards() {
  // Expanded sample data for demonstration
  const flashcards = [
    { question: 'What is AI?', answer: 'AI stands for Artificial Intelligence.' },
    { question: 'What is a neural network?', answer: 'A neural network is a series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.' },
    { question: 'What is machine learning?', answer: 'Machine learning is a subset of AI that involves training algorithms to learn from and make predictions or decisions based on data.' },
    { question: 'What is deep learning?', answer: 'Deep learning is a subset of machine learning that uses neural networks with many layers (deep neural networks) to analyze complex data patterns.' },
    { question: 'What is supervised learning?', answer: 'Supervised learning is a type of machine learning where the model is trained on labeled data, meaning that each training example is paired with an output label.' },
    { question: 'What is unsupervised learning?', answer: 'Unsupervised learning is a type of machine learning where the model is trained on unlabeled data and must find hidden patterns or intrinsic structures in the input data.' },
    { question: 'What is reinforcement learning?', answer: 'Reinforcement learning is a type of machine learning where an agent learns to make decisions by receiving rewards or penalties based on its actions.' },
    { question: 'What is overfitting?', answer: 'Overfitting occurs when a machine learning model learns the training data too well, including noise and outliers, leading to poor generalization to new data.' },
    { question: 'What is underfitting?', answer: 'Underfitting occurs when a machine learning model is too simple to capture the underlying pattern of the data, leading to poor performance on both training and new data.' },
    { question: 'What is cross-validation?', answer: 'Cross-validation is a technique for assessing how the results of a statistical analysis will generalize to an independent data set. It is commonly used to evaluate the performance of machine learning models.' },
    // Add more flashcards here as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        AI Flashcards
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom textAlign="center">
        Hover over a flashcard to flip it and see the answer.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {flashcards.map((flashcard, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className={styles.flashcard}>
              <Box className={styles.card}>
                <Box className={styles.front}>
                  <Typography variant="h6" component="div">
                    {flashcard.question}
                  </Typography>
                </Box>
                <Box className={styles.back}>
                  <Typography variant="h6" component="div">
                    {flashcard.answer}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
