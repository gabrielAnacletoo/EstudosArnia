import Title from './title'
import Skill from './skill'

const Skills = ({ title, skills }) => {
  return (
    <div className='skills'>
      <Title>{title}</Title>

      {skills.map((item, index) => (
        <Skill
          key={index}
          title={item.title}
          skill={item.skill}
        />
      ))}

    </div>
  )
}


export default Skills