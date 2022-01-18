import classes from "./bar.module.css";
import { useEffect, useState } from "react";
const ProgressBar = (props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShow(true);
    }, 8000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div className={classes.containerStyles}>
      <div
        className={
          props.completed === 100 ? classes.fillerStyles : classes.fillerStyle2
        }
      >
        <span className={classes.labelStyles}>
          {show && props.completed + "%"}
        </span>
      </div>
    </div>
  );
};
export default ProgressBar;
