import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const message = "Venha estudar na Fatec";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prevText) => prevText + message[index]);
      index++;
      if (index >= message.length) {
        clearInterval(interval);
      }
    }, 150); // Intervalo de 150ms para cada letra
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [message]);

  return (
    <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
      {displayedText}
    </div>
  );
};

export default TypingEffect;
