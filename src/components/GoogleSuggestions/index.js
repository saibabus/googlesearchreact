// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchtext: ''}

  changesearchcontent = suggestion => {
    this.setState({searchtext: suggestion})
  }

  changetextinput = event => {
    this.setState({searchtext: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchtext} = this.state
    const suggestionResultslist = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchtext.toLowerCase()),
    )
    return (
      <div className="googlesearch-appcon">
        <div className="googlesearch-container">
          <img
            className="googlelogo"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="serachsuggestioncon">
            <div className="seachinputcon">
              <img
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="searchicon"
              />
              <div className="inputcon">
                <input
                  type="search"
                  placeholder="Search Google"
                  className="searchinput"
                  value={searchtext}
                  onChange={this.changetextinput}
                />
              </div>
            </div>
            <ul className="">
              {suggestionResultslist.map(eachsuggestion => (
                <SuggestionItem
                  eachsuggestion={eachsuggestion}
                  key={eachsuggestion.id}
                  changesearchcontent={this.changesearchcontent}
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
