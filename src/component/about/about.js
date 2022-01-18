import Modal from "../modal/modal";
import Image from "../../asset/10.jpg";
import classes from "./about.module.css";

const About = (props) => {
  return (
    <section onClick={props.clicked}>
      <Modal>
        <div className={classes.total}>
          {" "}
          <div className={classes.image}>
            <img src={Image} alt="About Ade-Akanfe Adebayor" />
          </div>
          <div className={classes.caption}>
            <div className={classes.header_caption}>About Me</div>
          </div>
          <div className={classes.body_caption}>
            <div className={classes.children}>
              <span>Name: </span>
              <span>ADE-AKANFE ADEBAYO PHILIP</span>
            </div>
            <div className={classes.children}>
              <span>PHONE: </span>
              <span>+234 9038 7146 59</span>
            </div>
            <div className={classes.children}>
              <span>EMAIL: </span>
              <span>adeakanfeadebayormi@gmail.com</span>
            </div>
            <div className={classes.children}>
              <span>DEGREE: </span>
              <span>BACHELOR OF TECHNOLOGY</span>
            </div>
            <div className={classes.children}>
              <span>SKILL: </span>
              <span>UI/UX DESIGN, WEB DESIGN</span>
            </div>
            <div className={classes.children}>
              <span>CITY: </span>
              <span>LAGOS NIGERIA</span>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
export default About;
