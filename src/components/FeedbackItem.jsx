import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple'></FaTimes>
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple'></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propType = {
  item: PropTypes.object,
}

export default FeedbackItem
