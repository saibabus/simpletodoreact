// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoin, deltelistis} = props
  const {id, title} = eachTodoin
  const deetetitle = () => {
    deltelistis(id)
  }
  return (
    <li className="todolistcontainer">
      <p className="titlestyle">{title}</p>
      <button className="button" type="button" onClick={deetetitle}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
