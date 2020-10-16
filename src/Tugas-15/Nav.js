import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TableBuah from "../Tugas-9/TableBuah";
import HargaBuah from "../Tugas-10/HargaBuah";
import Timer from "../Tugas-11/Timer";
import FormBuahUpdate from "../Tugas-12/FormBuahUpdate";
import HooksReal from "../Tugas-13/HooksReal";
import Buah from "../Tugas-14/Buah";

import "./ModeColor.css";

import { useContext } from "react";

import { ThemeContext } from "./Theme";

const Nav = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const handleChangeMode = () => {
    if (theme == "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  return (
    <Router>
      <div className="navigasi">
        <nav className={theme}>
          <ul>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-9/TableBuah">
                Home
              </Link>
            </li>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-10/HargaBuah">
                Tugas 10
              </Link>
            </li>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-11/Timer">
                Tugas 11
              </Link>
            </li>
            <li>
              <Link
                className={theme + " link-nav"}
                to="../Tugas-12/FormBuahUpdate"
              >
                Tugas 12
              </Link>
            </li>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-13/HooksReal">
                Tugas 13
              </Link>
            </li>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-14/Buah">
                Tugas 14
              </Link>
            </li>
            <li>
              <div className="box-togle">Mode</div>
              <input
                type="checkbox"
                checked={theme == "light-mode" ? true : false}
                onChange={handleChangeMode}
                className="togle-check"
              />
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/Tugas-9/TableBuah">
            <TableBuah />
          </Route>
          <Route exact path="/Tugas-10/HargaBuah">
            <HargaBuah />
          </Route>
          <Route exact path="/Tugas-11/Timer">
            <Timer />
          </Route>
          <Route exact path="/Tugas-12/FormBuahUpdate">
            <FormBuahUpdate />
          </Route>
          <Route exact path="/Tugas-13/HooksReal">
            <HooksReal />
          </Route>
          <Route exact path="/Tugas-14/Buah">
            <Buah />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
