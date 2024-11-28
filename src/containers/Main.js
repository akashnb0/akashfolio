import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main(propss) {
  const redirectTo = (url) => {
    window.location.href = url;
    return null;
  };

  if (settings.isSplash) {
    return (
      <div>
        <Router>
          <Switch>
            {/* Existing Routes */}
            <Route
              path="/"
              exact
              render={(props) => (
                <Splash
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />

            {/* Redirect Routes */}
            <Route
              path="/siliconresume"
              render={() =>
                redirectTo(
                  "https://drive.google.com/file/d/1J5-YE1YkSQyRM_YoRx3T53o8iONh8ajN/view?usp=drive_link"
                )
              }
            />
            <Route
              path="/networkresume"
              render={() =>
                redirectTo(
                  "https://drive.google.com/file/d/1GW7dKKvHjl6KP4z3mHJ905YTYSlpR3de/view?usp=drive_link"
                )
              }
            />
            <Route
              path="/hardwareresume"
              render={() =>
                redirectTo(
                  "https://drive.google.com/file/d/1dfzfdbxTJQ6-7nzkYy0xTPK4Al9_sxw4/view?usp=sharing"
                )
              }
            />
            <Route
              path="/links"
              render={() =>
                redirectTo(
                  "https://drive.google.com/file/d/1dfzfdbxTJQ6-7nzkYy0xTPK4Al9_sxw4/view?usp=sharing"
                )
              }
            />
          </Switch>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Router>
          <Switch>
            {/* Existing Routes */}
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />

            {/* Redirect Routes */}
            <Route
              path="/siliconresume"
              render={() =>
                redirectTo(
                  "https://drive.google.com/file/d/1J5-YE1YkSQyRM_YoRx3T53o8iONh8ajN/view?usp=drive_link"
                )
              }
            />
            <Route
              path="/networkresume"
              render={() =>
                redirectTo(
                  "https://drive.google.com/file/d/1GW7dKKvHjl6KP4z3mHJ905YTYSlpR3de/view?usp=drive_link"
                )
              }
            />
            <Route
              path="/hardwareresume"
              render={() =>
                redirectTo(
                  "https://drive.google.com/file/d/1dfzfdbxTJQ6-7nzkYy0xTPK4Al9_sxw4/view?usp=sharing"
                )
              }
            />
            <Route
              path="/links"
              render={() =>
                redirectTo(
                  "https://drive.google.com/file/d/1dfzfdbxTJQ6-7nzkYy0xTPK4Al9_sxw4/view?usp=sharing"
                )
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}



/* import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main(propss) {
  if (settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Splash
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/splash"
              render={(props) => (
                <Splash
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}    */
