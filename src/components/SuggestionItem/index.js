// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachsuggestion, changesearchcontent} = props
  const {suggestion} = eachsuggestion
  const clickbutton = () => {
    changesearchcontent(suggestion)
    console.log(suggestion)
  }
  return (
    <li className="eachsuggestioncon">
      <p className="suggestionstyle">{suggestion}</p>
      <div>
        <img
          alt="arrow"
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          onClick={clickbutton}
        />
      </div>
    </li>
  )
}
export default SuggestionItem
