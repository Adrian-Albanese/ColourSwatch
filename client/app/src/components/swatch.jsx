import { useState, useEffect } from 'react';
import './swatch.css';

// eslint-disable-next-line react/prop-types
const Swatch = ({ regenerate }) => {
  const [colour, setColour] = useState('pink'); // Default color is pink

  // Function to fetch color from an API
  const fetchColour = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/fetchcolour/'); // API that returns the color
      const data = await response.json();
      switch (data.type) {
        case 'RGB': setColour(`rgb(${data.r},${data.g},${data.b})`); break;
        case 'HSL': setColour(`hsl(${data.hue},${data.sat}%,${data.light}%)`); break;
        default: setColour('pink'); // Fallback if no type matches
      }
    } catch (error) {
      console.error('Error fetching the colour:', error);
    }
  };

  // Trigger the fetchColour function when the regenerate value changes
  useEffect(() => { fetchColour(); }, [regenerate]);

  return (
    <div className="container">
      <div className="color-box" style={{ backgroundColor: colour }}></div>
      <div className="text-box">{colour}</div>
    </div>
  );
};

export default Swatch;
