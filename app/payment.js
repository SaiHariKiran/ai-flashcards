import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Payment() {
  const router = useRouter();
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handlePayment = () => {
    // Simple client-side payment handling (no API keys used)
    alert('Payment successful!');
    router.push('/');
  };

  return (
    <div>
      <h1>Payment Information</h1>
      <div>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={cardInfo.cardNumber}
            onChange={handleInputChange}
            placeholder="Enter card number"
          />
        </label>
        <label>
          Expiry:
          <input
            type="text"
            name="expiry"
            value={cardInfo.expiry}
            onChange={handleInputChange}
            placeholder="MM/YY"
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={cardInfo.cvv}
            onChange={handleInputChange}
            placeholder="Enter CVV"
          />
        </label>
        <button onClick={handlePayment}>Submit Payment</button>
      </div>
    </div>
  );
}
