import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, number, setViewNum }) {
  const onClick = () => {
    setViewNum(number);
  };
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: propTypes.string.isRequired,
};

export default Button;
