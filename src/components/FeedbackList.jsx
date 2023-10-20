import { useContext } from 'react';
import Feedback from './Feedback';
import FeedbackContext from './context/FeedbackContext';

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext);

  if (feedbacks.length <= 0) {
    return <div>no feedbacks</div>;
  }
  return feedbacks.map((feedback) => (
    <Feedback key={feedback.id} item={feedback} />
  ));
};

export default FeedbackList;
