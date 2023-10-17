import PropTypes from 'prop-types';
import Feedback from './Feedback';

const FeedbackList = ({ feedbacks, handleDelete }) => {
  if (feedbacks.length <= 0) {
    return <div>no feedbacks</div>;
  }
  return feedbacks.map((feedback) => (
    <Feedback key={feedback.id} item={feedback} handleDelete={handleDelete} />
  ));
};

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
