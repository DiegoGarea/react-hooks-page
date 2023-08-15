import {useState} from 'react';
import {ThemeContext, themes} from '../contexts/ThemeContext';
import Button from '../components/Button';

const UseContextHook = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    // console.log(newTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Button />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </ThemeContext.Provider>
    </>
  );
};

export default UseContextHook;
