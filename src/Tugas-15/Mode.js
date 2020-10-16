import React, { useContext } from "react";
import Nav from "./Nav";
import { ThemeContext } from "./Theme";
import "./ModeColor.css";

const Mode = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Nav />
    </div>
  );
};

export default Mode;
