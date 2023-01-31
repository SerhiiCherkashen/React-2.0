// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar ";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import Trenirovka from "./components/Trenirovka/Trenirovka";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestSkill from "./components/TestSkill/Testskill";

let App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Navbar />
          <div className="rightContent">
            <Routes>
              <Route
                path="/profile"
                element={
                  <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                  // updateNewPostText={props.updateNewPostText}
                  />
                }
              />
              <Route
                path="/dialogs"
                element={
                  <Dialogs
                    state={props.state.messagePage}
                    dispatch={props.dispatch}
                  // updateOnChangeDialogs={props.updateOnChangeDialogs}
                  />
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/trenirovka" element={<Trenirovka
                page={props.state.trenirovkaPage}
                dispatch={props.dispatch}
              />} />
              <Route path="/testSkill" element={< TestSkill
                page={props.state.testSkillPage}

                dispatch={props.dispatch}
              />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
