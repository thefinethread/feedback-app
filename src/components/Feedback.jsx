import { RiCloseLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import Card from './shared/Card';

const Feedback = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="rating-container flex">{item.rating}</div>
      <p>{item.text}</p>
      <button className="delete-feedback" onClick={() => handleDelete(item.id)}>
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
