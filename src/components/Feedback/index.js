import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  handleFeedback = () => {
    this.setState({isFeedbackGiven: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackGiven} = this.state

    return (
      <div className="feedback-container">
        {!isFeedbackGiven ? (
          <div className="feedback-card">
            <h1 className="feedback-heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emoji-list">
              {emojis.map(({id, name, imageUrl}) => (
                <li key={id} className="emoji-item">
                  <button
                    className="emoji-button"
                    onClick={this.handleFeedback}
                    type="button"
                  >
                    <img src={imageUrl} alt={name} className="emoji-img" />
                    <p className="emoji-name">{name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="thank-you-card">
            <img
              src={loveEmojiUrl}
              alt="love emoji"
              className="thank-you-img"
            />
            <h1 className="thank-you-heading">Thank You!</h1>
            <p className="thank-you-text">
              We will use your feedback to improve our customer support.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
