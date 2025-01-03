import React from "react";
import '../css/navigation.css';

const DigitalClock = () =>{
    return(
        <div className="container-navigation" >
            <div className="digital-clock">
                <span className="day-clock">01</span>
                <span className="month-clock">Septiembre</span>
                <span className="year-clock">2025</span>
                <span>:</span>
                <span className="hours-clock">10</span>
                <span>:</span>
                <span className="minute-clock">10</span>
                <span>:</span>
                <span className="secongs-clock">59</span>
                <span className="AM-clock">AM</span>
            </div>

        </div>
    )
}

export default DigitalClock;