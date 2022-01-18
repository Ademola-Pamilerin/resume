import classes from "./home.module.css";
import Image from "../../asset/3.jpg";

const Home = (props) => {
  return (
    <>
      <div className={classes.image}>
        <img src={Image} alt="Home page" />
      </div>
      <div className={classes.container}>
        <div className={classes.cover}>
          <div className={classes.caption_container}>
            <span
              onClick={() => {
                props.switch("About");
              }}
            >
              About
            </span>
          </div>
          <div className={classes.caption_container}>
            <span
              onClick={() => {
                props.switch("Skill");
              }}
            >
              Skill
            </span>
          </div>
          <div className={classes.caption_container}>
            <span
              onClick={() => {
                props.switch("Education");
              }}
            >
              Education
            </span>
          </div>
          <div className={classes.caption_container}>
            <span
              onClick={() => {
                props.switch("Portfolio");
              }}
            >
              Portfolio
            </span>
          </div>
          <div className={classes.caption_container}>
            <span
              onClick={() => {
                props.switch("Experience");
              }}
            >
              Experience
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
