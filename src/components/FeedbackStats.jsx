import PropTypes from 'prop-types';

const FeedbackStats = ({ feedbacks }) => {
  let average =
    feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0) /
    feedbacks.length;

  return (
    <div className="feedback-stats flex">
      <div>{feedbacks.length} Reviews</div>
      <div>Average Rating: {isNaN(average) ? 0 : average}</div>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};

export default FeedbackStats;
