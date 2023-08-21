import Header from './header'
import Hero from './hero'
import Skills from './skills'

import './styles.css'
import AboutMe from './about-me'
import Education from './education'

const curriculum = {
  aboutMe: {
    title: 'About me',
    description: 'lorem ipusm dolor amet consectetur'
  },
  education: {
    title: 'Education',
    description: 'lorem ipusm dolor amet consectetur',
    text: 'lorem ipusm dolor amet consectetur lorem ipusm dolor amet consectetur lorem ipusm dolor amet consectetur'
  },
  skills: {
    title: 'Skills',
    skills: [
      { title: 'Flutter', skill: 3 },
      { title: 'React Native', skill: 3 },
      { title: 'Ionic', skill: 4 },
      { title: 'Unity', skill: 5 },
      { title: 'React', skill: 5 },
      { title: 'PhP', skill: 1 },
      { title: 'Node', skill: 3 },
      { title: 'GO', skill: 5 },
    ]
  }
}


const Curriculum = () => {
  return (
    <div className="container">
      <Header />
      <Hero />

      <AboutMe {...curriculum.aboutMe} />
      <Education {...curriculum.education} />

      {/* <Title>About me</Title>
      <Title>Education</Title>
      <Title>Experience</Title> */}

      <Skills {...curriculum.skills} />

    </div>
  )
}

export default Curriculum
