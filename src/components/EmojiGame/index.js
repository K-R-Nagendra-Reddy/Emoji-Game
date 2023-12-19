/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    List: [],
    count: 0,
    clickedEmoji: [],
    clickedEmojiLength: 0,
    endGame: false,
  }

  shuffledEmojis = name => {
    const {clickedEmoji} = this.state
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
    const emojiNamesList = clickedEmoji.filter(each => each === name)
    console.log(emojiNamesList)
    if (emojiNamesList.length === 0) {
      console.log(true)
      this.setState(prevState => ({
        clickedEmoji: [...prevState.clickedEmoji, name],
        score: prevState.score + 1,
        topScore: prevState.topScore + 1,
        clickedEmojiLength: prevState.clickedEmojiLength + 1,
      }))
    }
    if (emojiNamesList.length > 0) {
      this.setState({endGame: true})
    }
  }

  render() {
    const {
      score,
      topScore,
      List,
      count,
      clickedEmoji,
      clickedEmojiLength,
      endGame,
    } = this.state
    const {emojisList} = this.props
    console.log(clickedEmoji)
    console.log(endGame)
    if (count > 0 && count === clickedEmojiLength) {
      emojisList.sort(() => Math.random() - 0.5)
      return (
        <div className="bg-container">
          <nav>
            <NavBar score={score} topScore={topScore} />
          </nav>
          <div>
            <ul className="emojis-container">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  details={each}
                  shuffleEmojis={this.shuffledEmojis}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <nav>
          <NavBar score={score} topScore={topScore} />
        </nav>
        <div>
          <ul className="emojis-container">
            {emojisList.map(each => (
              <EmojiCard
                key={each.id}
                details={each}
                shuffleEmojis={this.shuffledEmojis}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame
