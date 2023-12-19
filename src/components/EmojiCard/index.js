// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, shuffleEmojis} = props
  const {id, emojiName, emojiUrl} = details

  const shuffleShuffle = () => {
    shuffleEmojis(emojiName)
  }

  return (
    <li className="list-emoji" onClick={shuffleShuffle}>
      <img src={emojiUrl} className="emoji" alt={emojiName} />
    </li>
  )
}
export default EmojiCard
