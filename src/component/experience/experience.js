import Modal from "../modal/modal";
import Image from "../../asset/3.jpg";
import classes from "./experience.module.css";
import Ed from "../education/ed";
const Experience = (props) => {
  const data = [
    {
      title: "Johnark bong schools",
      cert: "2017-2019",
      qua:"ICT TEACHER"
    },
    {
      title: "Revelation concepts",
      cert: "2019-2020",
      qua:"SYSTEM OPERATOR"
    },
    {
      title: "A-men technology",
      cert: "2020 - 2021",
      qua:"UI/UX DESIGNER"
    },
    {
      title: "TECH BROS",
      cert: "2021 - present",
      qua: "UI/UX DESIGNER",
    },
  ];
  return (
    <section onClick={props.clicked}>
    <Modal>
      <div>
        <div className={classes.image_container}>
          <img src={Image} alt="Ade-akanfe Adebayo experience" />
        </div>
        <div className={classes.caption}>
          <span>Experiences</span>
        </div>
        <div className={classes.body}>
          <div className={classes.inner}>
            {data.map((el, index) => (
              <Ed title={el.title} cert={el.cert} qua={el.qua} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
    </section>
  );
};
export default Experience;
