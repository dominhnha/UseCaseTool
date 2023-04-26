import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'

const useTheme = () => {
    const [theme, setTheme] = useState<string|null>(null);

    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: light)').matches){
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    }, [])
  
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
    return {
        theme,handleThemeSwitch
    }
}



export default useTheme