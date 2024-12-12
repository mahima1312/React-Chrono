import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineCard} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimelineCard

  return (
    <div className="project-container">
      <img className="projectImg" src={imageUrl} alt="project" />
      <div className="course-heading-container">
        <h1 className="course-heading">{projectTitle}</h1>
        <div className="timeline">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
