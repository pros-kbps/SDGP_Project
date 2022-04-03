import React from 'react';
import timelineData from '../../Matches/Data';

const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <p className="title" >
                {data.describe2}
            </p>
            <time>{data.describe1} - {data.describe3} - {data.describe4}</time>
    
            <div className='team'>
                <p>{data.header2}</p>        
                <img src={data.img1} className='team1' width="50px" height="40px"/>
                <p className='team1'> -- / -- </p>

                
                <img src={data.img2} className='team2' width="50px" height="40px"/>
                <p className='team2'> -- / -- </p>
            
            </div>
            <a href= "/">Read More</a>
            
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;