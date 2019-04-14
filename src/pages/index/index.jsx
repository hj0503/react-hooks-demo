import React from 'react';
import styles from './index.less';
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';

const ThemeContext = React.createContext('theme1');

export default function() {
  return (
    <div className={styles.normal}>
      <ThemeContext.Provider value="theme1">
        <UseStateDemo />
      </ThemeContext.Provider>
      <UseEffectDemo />
    </div>
  );
}

export { ThemeContext };
