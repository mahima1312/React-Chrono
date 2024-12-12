import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const courseTimelineCardsList = []

  timelineItemsList.forEach(item => {
    if (item.categoryId === 'COURSE') {
      courseTimelineCardsList.push(item)
    }
  })
  console.log(courseTimelineCardsList)

  const projectTimelineCardsList = []
  timelineItemsList.forEach(item => {
    if (item.categoryId === 'PROJECT') {
      projectTimelineCardsList.push(item)
    }
  })

  const renderTimeline = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseTimelineCard={item} />
    }
    return <ProjectTimelineCard key={item.id} projectTimelineCard={item} />
  }
  console.log(projectTimelineCardsList)
  return (
    <div className="app-container">
      <div className="heading-container">
        <h1 className="heading">
          MY JOURNEY OF <br />
          <div className="span">CCBP 4.0</div>
        </h1>
      </div>

      <Chrono
        theme={{secondary: 'white'}}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachTimeLine => renderTimeline(eachTimeLine))}
      </Chrono>
    </div>
  )
}
export default TimelineView
