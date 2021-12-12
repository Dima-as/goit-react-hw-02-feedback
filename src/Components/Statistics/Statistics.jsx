import Notification from "../Notification/Notification";
const Statistics = ({ good, neutral, bad, total, positiveFedback }) => {
  return (
    <>
      <h2>Statistics</h2>
      {total === 0 ? (
        <Notification />
      ) : (
        <div>
          <ul>
            <li>Good:{good}</li>
            <li>Neutaral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Positive fedback:{positiveFedback}%</li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Statistics;
