import Modal from "../modal/modal";
import Image from "../../asset/4.jpg";
import classes from "./edu.module.css";
import Ed from "./ed";
const Education = (props) => {
  const data = [
    {
      title: "primary school leaving certificate",
      cert: "2008",
      qua: "Abbot Dayspring School",
    },
    {
      title: "JUNIOR secondary school leaving certificate",
      cert: "2008 - 2011",
      qua: "Abbot Dayspring School",
    },
    {
      title: "senior secondary school leaving certificate",
      cert: "2011 - 2014",
      qua: "Abbot Dayspring School",
    },
    {
      title: "JUNIOR secondary school leaving certificate",
      cert: "2008 - 2011",
      qua: "Abbot Dayspring School",
    },
    {
      title: "Bachelor of technology",
      cert: "2015 - 2020",
      qua: "Ladoke Akintola University of Technology, LAUTECH ",
    },
  ];
  return (
    <section onClick={props.clicked}>
      <Modal>
        <div>
          <div className={classes.image_container}>
            <img src={Image} alt="Ade-akanfe Adebayo education" />
          </div>
          <div className={classes.caption}>
            <span>Education</span>
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
export default Education;
