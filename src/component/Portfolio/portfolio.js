import Image from "../../asset/7.jpg";
import classes from "./portfolio.module.css";
import Modal from "../modal/modal";

const Portfolio = (props) => {
  return (
    <section onClick={props.clicked}>
      <Modal>
        <div className={classes.total}>
          {" "}
          <div className={classes.image}>
            <img src={Image} alt="Portfolio Ade-Akanfe Adebayor" />
          </div>
          <div className={classes.caption}>
            <div className={classes.header_caption}>Portfolio</div>
          </div>
          <div className={classes.top}>
            <div className={classes.container}>
              <section className={classes.sections}>
                <div className={classes.title}>
                  <span>A-MEN Technology</span>
                </div>
                <div className={classes.date}>
                  <span>2020-2021</span>
                </div>
              </section>
              <section className={classes.sections}>
                <div className={classes.title}>
                  <span>TECH BROS</span>
                </div>
                <div className={classes.date}>
                  <span>2021-Present</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
export default Portfolio;
