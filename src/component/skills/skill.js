import Modal from "../modal/modal";
import Image from "../../asset/7.jpg";
import classes from "./skill.module.css";
import ProgressBar from "../progressiveBar/bar";

const Skills = (props) => {
  const data = [
    { bgcolor: "green", completed: 100, lang: "ADOBE XD" },
    { bgcolor: "blue", completed: 80, lang: "CSS" },
    { bgcolor: "green", completed: 100, lang: "FIGMA" },
    { bgcolor: "green", completed: 100, lang: "HTML" },
  ];
  return (
    <section onClick={props.clicked}>
      <Modal>
        <div className={classes.total}>
          {" "}
          <div className={classes.image}>
            <img src={Image} alt="skills Ade-Akanfe Adebayor" />
          </div>
          <div className={classes.caption}>
            <div className={classes.header_caption}>Skills:</div>
          </div>
          <div className={classes.top}>
            <div className={classes.container}>
              {data.map((item, i) => (
                <div key={i} className={classes.clildren}>
                  <span className={classes.words}>{item.lang}</span>
                  <ProgressBar
                    bgcolor={item.bgcolor}
                    completed={item.completed}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
export default Skills;
