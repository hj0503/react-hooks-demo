import React, { useState, useEffect } from 'react';
import Row from '../../../../components/Row';

export default function HooksComponent() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const addWidth = () => setWidth(width + 1);
    const timer = setInterval(addWidth, 2000);
    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <section>
      <Row label="width">{width}</Row>
    </section>
  );
}
