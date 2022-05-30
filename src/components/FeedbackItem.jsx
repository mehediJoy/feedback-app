import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
          <FaTimes color='purple'></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propType = {
  item: PropTypes.object,
}

export default FeedbackItem
