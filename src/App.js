import About from "./component/about/about";
import Skill from "./component/skills/skill";
import Education from "./component/education/edu";
import Portfolio from "./component/Portfolio/portfolio";
import Experience from "./component/experience/experience";
import Homepage from "./component/homepage/home";
import { useState } from "react";
import ReactDom from "react-dom";

const App = () => {
  const [show, setShow] = useState("none");
  const domNode = document.getElementById("DOM_Node");

  const clicked = () => {
    setShow("none");
  };
  const Switched = (val) => {
    setShow(val);
  };
  console.log(show)
  return (
    <>
      {show === "About" &&
        ReactDom.createPortal(<About clicked={clicked} />, domNode)}
      {show === "Skill" &&
        ReactDom.createPortal(<Skill clicked={clicked} />, domNode)}
      {show === "Education" &&
        ReactDom.createPortal(<Education clicked={clicked} />, domNode)}
      {show === "Portfolio" &&
        ReactDom.createPortal(<Portfolio clicked={clicked} />, domNode)}
      {show === "Experience" &&
        ReactDom.createPortal(<Experience clicked={clicked} />, domNode)}
      {show === "none" && <Homepage switch={(val)=>Switched(val)} />}
    </>
  );
};
export default App;
