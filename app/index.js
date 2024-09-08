import { useState } from 'react';
import FlashcardForm from './components/FlashcardForm.js';
import FeatureList from './components/FeatureList.js';
import Pricing from './components/Pricing.js';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handlePurchase = () => {
    // Navigate to payment page
    router.push('/payment');
  };

  return (
    <div>
      <header>
        <h1>AI Flashcard SaaS</h1>
        <p>Create flashcards effortlessly using AI.</p>
      </header>
      <main>
        <FlashcardForm />
        <FeatureList />
        <Pricing onPurchase={handlePurchase} />
      </main>
      <footer>
        <p>© 2024 Flashcard SaaS</p>
      </footer>
    </div>
  );
}
