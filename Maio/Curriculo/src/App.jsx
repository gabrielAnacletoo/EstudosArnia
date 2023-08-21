import {
    aboutMe,
    contactInfo,
    education,
    experience,
    personInformation,
    skills,
  } from "./assets/constants"
  import Photo from "./assets/images/photo.png"
  
  import ContactInfo from "./components/ContactInfo"
  import Header from "./components/Header"
  import Section from "./components/Section"
  import ExperienceInfo from "./components/ExperienceInfo"
  import Skill from "./components/Skill"
  
  function App() {
    return (
      <div>
        <div>
          {contactInfo.map((information) => (
            <ContactInfo
              icon={information.icon}
              information={information.information}
              key={information.information}
            />
          ))}
        </div>
        <Header
          name={personInformation.name}
          profession={personInformation.profession}
          image={Photo}
        />
        <Section title="About me">
          <p>{aboutMe}</p>
        </Section>
        <Section title="Education">
          <div>
            {education.map(({ name, period, description }, index) => (
              <ExperienceInfo
                experienceName={name}
                period={period}
                description={description}
                key={index}
              />
            ))}
          </div>
        </Section>
        <Section title="Experience">
          <div>
            {experience.map(({ name, period, description }, index) => (
              <ExperienceInfo
                experienceName={name}
                period={period}
                description={description}
                key={index}
              />
            ))}
          </div>
        </Section>
        <Section title="Skills">
          {skills.map(({ name, level }) => (
            <Skill name={name} level={level} />
          ))}
        </Section>
      </div>
    )
  }
  
  export default App