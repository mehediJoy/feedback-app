import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is from context 1',
      rating: 9,
    },
    {
      id: 2,
      text: 'This is from context 2',
      rating: 8,
    },
    {
      id: 13,
      text: 'This is from context 3',
      rating: 10,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return <FeedbackContext.Provider value={{ 
      feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback
      }}>
      {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
