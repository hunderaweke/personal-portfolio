import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import React, { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe.jsx";

const App = () => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    storedTheme ? JSON.parse(storedTheme) : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <Navigation theme={theme} changeTheme={changeTheme} />
      <Hero theme={theme} />
      <AboutMe theme={theme} />
    </>
  );
};

export default App;
