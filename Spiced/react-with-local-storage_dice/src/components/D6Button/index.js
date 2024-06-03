import PropTypes from "prop-types";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRoll }) {
  return (
    <button className="d6-button" type="button" onClick={onRoll}>
      <D6 value={value} />
    </button>
  );
}

D6Button.propTypes = {
  value: PropTypes.number,
  onRoll: PropTypes.func.isRequired,
};
