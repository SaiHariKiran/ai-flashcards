export default function Pricing({ onPurchase }) {
    return (
      <div>
        <h2>Pricing</h2>
        <div>
          <h3>Basic Plan</h3>
          <p>$10/month</p>
          <button onClick={onPurchase}>Purchase</button>
        </div>
      </div>
    );
  }
  