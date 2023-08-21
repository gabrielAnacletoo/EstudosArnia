export default function Ex1Item ({ name, tarefa }) {
  // props.tarefa
  // props.name = `tarefa-${index}`

  return (
    <li>
      <input type="checkbox" name={name} id={name} />
      <label htmlFor={name}>
        {tarefa}
      </label>
    </li>
  )
}
