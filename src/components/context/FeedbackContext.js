import { v4 as uuid4 } from 'uuid';
import { createContext, useState } from 'react';
import FeedbackData from '../../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  const updateFeedback = (feedback) => {
    /* { ...item, ...feedback } means firstly "...item"  will spread the existing item
       and then "...feedback" will override those fields which are being passed for update
    */
    if (feedbackEdit.edit) {
      setFeedbacks(
        feedbacks.map((item) =>
          item.id === feedback.id ? { ...item, ...feedback } : item
        )
      );
      setFeedbackEdit({ feedback: {}, edit: false });
    }
  };

  const feedbackEditMode = (feedback) => {
    setFeedbackEdit({
      feedback,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        feedbackEditMode,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
