// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div className="nav-container">
      <div className="logo-name-element">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <p className="emoji-logo-name">Emoji Game</p>
      </div>
      <div className="logo-name-element">
        <p className="score1">score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
