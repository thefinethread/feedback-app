import { useState } from 'react';
import PropTypes from 'prop-types';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = ({ addFeedback }) => {
  const [inputClass, setInputClass] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const setDefaultStates = () => {
    setIsDisabled(true);
    setMessage('');
    setInputClass('');
  };

  const handleTextChange = (e) => {
    setText(e.target.value);

    if (e.target.value === '') {
      setDefaultStates();
    } else if (e.target.value.trim().length <= 10) {
      setIsDisabled(true);
      setMessage('Please enter at least 10 characters.');
      setInputClass('error');
    } else {
      setIsDisabled(false);
      setMessage('');
      setInputClass('success');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      addFeedback({
        text,
        rating,
      });

      // reset to default
      setText('');
      setDefaultStates();
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>How would you rate your service with us?</h3>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-container">
          <input
            className={inputClass}
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button isDisabled={isDisabled} type="submit" version="primary">
            Send
          </Button>
          <div className="message">{message}</div>
        </div>
      </form>
    </Card>
  );
};

FeedbackForm.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default FeedbackForm;
