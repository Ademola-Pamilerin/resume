import Backdrop from "../backdrop/backdrop";
import classes from "./modal.module.css";

const Modal = (props) => {
  return (
    <>
      <Backdrop />
      <div className={classes.cancel}>
        <span>X</span>
      </div>
      <section className={classes.Modal}>
        <div className={classes.main}>{props.children}</div>
      </section>
    </>
  );
};

export default Modal;
