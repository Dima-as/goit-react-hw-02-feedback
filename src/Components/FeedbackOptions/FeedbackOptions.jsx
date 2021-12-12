import s from "./FeedbackOptions.module.scss";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const option = Object.keys(options);
  return (
    <ul className={s.list}>
      {option.map((btn) => (
        <li key={btn} className={s.item}>
          <button
            type="button"
            onClick={onLeaveFeedback}
            name={btn}
            className={s.btn}
          >
            {btn}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default FeedbackOptions;
