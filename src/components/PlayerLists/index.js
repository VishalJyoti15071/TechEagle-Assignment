import './index.css'

const PlayerLists = props => {
  const {eachPlayer} = props
  const {name, speed, startTime} = eachPlayer

  return (
    <li className="ordered-list">
      <p className="each-name">{name}</p>
      <p className="each-speed">{speed} KM/H</p>
      <p className="each-start">{startTime}</p>
      <p className="each-end">--</p>
    </li>
  )
}

export default PlayerLists
