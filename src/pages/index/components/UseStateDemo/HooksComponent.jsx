import React, { useState, useContext } from 'react';
import Row from '../../../../components/Row';
import styles from '../../../../components/Row/Row.less';
import { ThemeContext } from '../../index';

export default function HooksComponent() {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const theme = useContext(ThemeContext);

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
    </section>
  );
}
