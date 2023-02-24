import style from "./KeyData.module.scss";
import PropTypes from "prop-types"; // ES6
function KeyData({icon, type, value, backgroundColor} : {icon: string, type: string, value: string, backgroundColor: string}) {
  return (
    <div className={style.KeyData}>
      <div className={style.KeyData_IconContainer} style={{
        backgroundColor: backgroundColor
      }}>
        <img src={icon} alt={type} />
      </div>
      <div className={style.KeyData_TextContainer}>
        <p className={style.KeyData_TextContainer_Value}>{value}</p>
        <p className={style.KeyData_TextContainer_Type}>{type}</p>
      </div>
    </div>
  );
}


KeyData.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
export default KeyData;
