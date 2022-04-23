import * as React from 'react';
import PredictForm from './PredictForm'

import Header from "../../components/Header/Header"
// import Timeline from './Timeline/timeline'
export default function Home() {
    
    return (
    <div className="header 2">
        <Header/>
        {/*<Timeline/>*/}
        <PredictForm/>
        
    </div>

    );
}

