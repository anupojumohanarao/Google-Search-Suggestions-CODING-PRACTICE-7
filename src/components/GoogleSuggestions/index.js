// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {onClickInputButton: ''}

  updateSearchInput = suggestion => {
    this.setState({onClickInputButton: suggestion})
  }

  onClickInput = event => {
    this.setState({onClickInputButton: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {onClickInputButton} = this.state
    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion
        .toLowerCase()
        .includes(onClickInputButton.toLowerCase()),
    )

    return (
      <div className="main-bg-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
            alt="google logo"
          />
          <div className="input-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="main-input"
                onChange={this.onClickInput}
                value={onClickInputButton}
              />
            </div>
            <ul className="list-card-container">
              {searchResults.map(eachUser => (
                <SuggestionItem
                  key={eachUser.id}
                  SuggestionItemDetails={eachUser}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
