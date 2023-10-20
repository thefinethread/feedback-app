import { RiCloseLine, RiEditBoxLine } from 'react-icons/ri';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from './context/FeedbackContext';

const Feedback = ({ item }) => {
  const { deleteFeedback, feedbackEditMode } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="rating-container flex">{item.rating}</div>
      <p>{item.text}</p>
      <button className="edit-icon-btn" onClick={() => feedbackEditMode(item)}>
        <RiEditBoxLine />
      </button>
      <button
        className="delete-feedback"
        onClick={() => deleteFeedback(item.id)}
      >
        <RiCloseLine />
      </button>
    </Card>
  );
};

Feedback.defaultProps = {
  item: {
    rating: 7,
    text: 'Just a sample feedback item.',
  },
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Feedback;
