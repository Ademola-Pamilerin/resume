import classes from "./ed.module.css";
const Ed = (props) => {
  return (
    <div className={classes.cover}>
      <span className={classes.title}>{props.title}</span>
      <div className={classes.aside}>
        <div className={classes.year}>{props.cert}</div>{" "}
        <div className={classes.location}>{props.qua}</div>
      </div>
    </div>
  );
};
export default Ed;
