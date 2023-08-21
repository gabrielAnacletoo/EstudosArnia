import Title from "./title";

export default function AboutMe ({ title, description  }) {
  return (
    <div>
      <Title>{title}</Title>
      <p>{description}</p>
    </div>
  )
}
