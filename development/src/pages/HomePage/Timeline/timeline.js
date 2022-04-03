import React from 'react';
import '../../../styles/Timeline.css'
import timelineData from './Data';
import TimelineItem from './timelineItem';


const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
            
        </div>
    );

export default Timeline;