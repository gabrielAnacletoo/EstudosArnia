import Title from "./title";

export default function Education ({ title, description, text  }) {
  return (
    <div>
      <Title>{title}</Title>
      
      <p>{description}</p>

      <small>{text}</small>
    </div>
  )
}
