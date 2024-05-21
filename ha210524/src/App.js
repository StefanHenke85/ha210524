import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sqrtNumber, setSqrtNumber] = useState(0);

  // Funktion zur Addition von zwei Zahlen
  const addNumbers = () => {
    return number1 + number2;
  };

  // Funktion zur Berechnung der Quadratwurzel einer Zahl
  const calculateSquareRoot = (number) => {
    return Math.sqrt(number);
  };

  // Generiere eine zufällige Zahl zwischen 1 und 100
  const randomNum = Math.floor(Math.random() * 100) + 1;

  // Aktuelles Datum (zufällig generiert)
  const generateRandomDate = () => {
    const randomDay = Math.floor(Math.random() * 28) + 1; // Generate a random day between 1 and 28
    const randomMonth = Math.floor(Math.random() * 12) + 1; // Generate a random month between 1 and 12
    const randomYear = Math.floor(Math.random() * 5) + 2020; // Generate a random year between 2020 and 2024
    return `${randomMonth}/${randomDay}/${randomYear}`;
  };

  // Datum (zufällig generiert)
  const randomDate = generateRandomDate();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="blue-text">Erste Übung mit React</h1>
        <p className="large-text">Ein kleiner versuch mit React und Mathe</p>

        {/* Benutzereingaben */}
        <div>
          <label>
            Erste Zahl:
            <input
              type="number"
              value={number1}
              onChange={(e) => setNumber1(parseInt(e.target.value))}
            />
          </label>
          <br />
          <label>
            Zweite Zahl:
            <input
              type="number"
              value={number2}
              onChange={(e) => setNumber2(parseInt(e.target.value))}
            />
          </label>
          <br />
          <label>
            Quadratwurzel von:
            <input
              type="number"
              value={sqrtNumber}
              onChange={(e) => setSqrtNumber(parseInt(e.target.value))}
            />
          </label>
        </div>

        {/* Ergebnisse mathematischer Berechnungen */}
        <h3>Ergebnisse der Addition:</h3>
        <p>{number1} + {number2} = {addNumbers()}</p>
        {sqrtNumber > 0 && (
          <p>Quadratwurzel von {sqrtNumber} = {calculateSquareRoot(sqrtNumber)}</p>
        )}

        {/* Zufällige Zahl und aktuelles Datum */}
        <h3>Zufällige Zahl und zufälliges Datum:</h3>
        <p>Zufällige Zahl: {randomNum}</p>
        <p>Zufälliges Datum: {randomDate}</p>
      </header>
    </div>
  );
};

export default App;
