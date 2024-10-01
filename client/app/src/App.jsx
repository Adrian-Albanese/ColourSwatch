import './App.css';
import Swatch from './components/swatch';
import { useState } from 'react';

function App() {
  const [regenerate, setRegenerate] = useState(0); // Track regenerate state

  // Function to trigger re-fetching for all Swatch components
  const regenerateSwatches = () => {
    setRegenerate((prev) => prev + 1); // Increment the regenerate state
  };

  return (
    <>
      <h1 className="heading">Colour Swatch</h1>
      <div>
        {/* Button to trigger API fetch for each Swatch */}
        <button onClick={regenerateSwatches}>Regenerate Swatches</button>
        {/* Each Swatch will re-fetch its color when the regenerate state changes */}
        <Swatch regenerate={regenerate} />
        <Swatch regenerate={regenerate} />
        <Swatch regenerate={regenerate} />
        <Swatch regenerate={regenerate} />
        <Swatch regenerate={regenerate} />
      </div>
    </>
  );
}

export default App;
