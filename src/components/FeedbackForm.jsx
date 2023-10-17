import { useState } from 'react';

import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [inputClass, setInputClass] = useState('');
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);

    if (e.target.value === '') {
      setIsDisabled(true);
      setMessage('');
      setInputClass('');
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

  return (
    <Card>
      <h3>How would you rate your service with us?</h3>
      <RatingSelect />
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
    </Card>
  );
};

export default FeedbackForm;
