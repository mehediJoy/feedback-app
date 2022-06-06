import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [massage, setMassage] = useState('')
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMassage(null)
    } else if (text.trim().length <= 10) {
      setBtnDisabled(true)
      setMassage('Text must be atleast 10 characters.')
    } else {
      setBtnDisabled(false)
      setMassage(null)
    }
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if(feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate your service with us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating)
          }}
        />
        <div className="input-group">
          <input onChange={handleChange} type="text" placeholder='Write a review.' value={text}/>
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {massage && <div className="massage">{massage}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
