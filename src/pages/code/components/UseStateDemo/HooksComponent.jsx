import React, { useState, useContext, useEffect } from 'react';
import Row from '../../../../components/Row';
import styles from '../../../../components/Row/Row.less';
import { ThemeContext } from '../../index';

export default function HooksComponent() {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = name + ' ' + surname;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <section className={styles[theme]}>
      <Row label="name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="surname">
        <input value={surname} onChange={handleSurnameChange} />
      </Row>
      <Row label="width">{width}</Row>
    </section>
  );
}

// function useFormInput(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   function handleChange(e) {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange,
//   };
// };

// function useDocumentTitle(title) {
//   useEffect(() => {
//     document.title = title;
//   });
// }

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   });
//   return width;
// }
