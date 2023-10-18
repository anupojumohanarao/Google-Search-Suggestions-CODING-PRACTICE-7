// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {SuggestionItemDetails, updateSearchInput} = props
  const {suggestion} = SuggestionItemDetails

  const onClickArrowButton = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="main-list-container">
      <p className="paragraph">{suggestion}</p>
      <button type="button" onClick={onClickArrowButton} className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-button"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
