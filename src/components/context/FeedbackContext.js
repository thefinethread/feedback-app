import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const res = await fetch('/feedbacks');
    const data = await res.json();

    setFeedbacks(data);
  };

  const addFeedback = async (newFeedback) => {
    const res = await fetch('feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();

    setFeedbacks([data, ...feedbacks]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const res = await fetch(`/feedbacks/${id}`, {
        method: 'DELETE',
      });
      const statusCode = res.status;
      if (statusCode === 200) {
        setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
      }
    }
  };

  const updateFeedback = async (feedback) => {
    if (feedbackEdit.edit) {
      // call json server for update request
      const res = await fetch(`/feedbacks/${feedback.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });
      const data = await res.json();
      /* { ...item, ...feedback } means firstly "...item"  will spread the existing item
         and then "...feedback" will override those fields which are being passed for update
      */
      setFeedbacks(
        feedbacks.map((item) =>
          item.id === data.id ? { ...item, ...data } : item
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
