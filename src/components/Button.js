import propTypes from "prop-types";
import styles from "../css/Button.module.css";
import { Link } from "react-router-dom";

function Button({ text, url }) {
  const onClick = () => {};
  return (
    <button className={styles.btn} onClick={onClick}>
      <Link to={url}>{text}</Link>
    </button>
  );
}

Button.propTypes = {
  text: propTypes.string.isRequired,
};

export default Button;
