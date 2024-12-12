import {AiFillClockCircle} from 'react-icons/ai'
import {Chrono} from 'react-chrono'

import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineCard} = props
  const {courseTitle, description, duration, tagsList} = courseTimelineCard

  return (
    <div>
      <div className="course-heading-container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="timeline">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list-container">
        {tagsList.map(eachTag => (
          <li className="list-elements" key={eachTag.id}>
            <p className="para">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
