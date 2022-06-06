import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeebackData from './data/FeedbackData'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'

function App() {
  const [feedback, setFeedback] = useState(FeebackData)
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback}/>
                  <FeedbackStats feedback={feedback}/>
                  <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                  <AboutIconLink/>
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
