

export default function DesktopSchedule(){
    return(
        <div id="scheduleScroll" className="schedule-container">
                <div className="empty day"></div>
                <div className="day">Monday</div>
                <div className="day">Tuesday</div>
                <div className="day">Wednesday</div>
                <div className="day">Thursday</div>
                <div className="day">Friday</div>
                <div className="day">Saturday</div>

                {/* Row One */}
                <div className="row1 schedule-row">1:10-2:30</div> {/* Time Card */}
                <div className="row1 schedule-row"></div> {/* Monday */}
                <div className="row1 schedule-row"></div> {/* Tuesday */}
                <div className="row1 schedule-row"></div> {/* Wednesday */}
                <div className="row1 schedule-row"></div> {/* Thursday */}
                <div className="row1 schedule-row"></div> {/* Friday */}
                <div className="row1 schedule-row">Conditioning</div> {/* Saturday */}
                
                {/* Row Two */}
                <div className="row2 schedule-row">9-9:40</div> {/* Time Card */}
                <div className="row2 schedule-row"></div> {/* Monday */}
                <div className="row2 schedule-row"></div> {/* Tuesday */}
                <div className="row2 schedule-row"></div> {/* Wednesday */}
                <div className="row2 schedule-row"></div> {/* Thursday */}
                <div className="row2 schedule-row"></div> {/* Friday */}
                <div className="row2 schedule-row"></div> {/* Saturday */}
                
                {/* Row Three */}
                <div className="row1 schedule-row">6:30-7:30</div> {/* Time Card */}
                <div className="row1 schedule-row"></div> {/* Monday */}
                <div className="row1 schedule-row"></div> {/* Tuesday */}
                <div className="row1 schedule-row"></div> {/* Wednesday */}
                <div className="row1 schedule-row"></div> {/* Thursday */}
                <div className="row1 schedule-row">Sparring</div> {/* Friday */}
                <div className="row1 schedule-row"></div> {/* Saturday */}

                {/* Row Four */}
                <div className="row2 schedule-row">7:00-8:00</div> {/* Time Card */}
                <div className="row2 schedule-row">Sparring</div> {/* Monday */}
                <div className="row2 schedule-row"></div> {/* Tuesday */}
                <div className="row2 schedule-row"></div> {/* Wednesday */}
                <div className="row2 schedule-row"></div> {/* Thursday */}
                <div className="row2 schedule-row"></div> {/* Friday */}
                <div className="row2 schedule-row"></div> {/* Saturday */}

                {/* Row Five */}
                <div className="row1 schedule-row">8:00-9:00</div> {/* Time Card */}
                <div className="row1 schedule-row"></div> {/* Monday */}
                <div className="row1 schedule-row"></div> {/* Tuesday */}
                <div className="row1 schedule-row">Sparring</div> {/* Wednesday */}
                <div className="row1 schedule-row"></div> {/* Thursday */}
                <div className="row1 schedule-row"></div> {/* Friday */}
                <div className="row1 schedule-row"></div> {/* Saturday */}

                {/* Row Six */}
                <div className="row2 schedule-row">7:30-8:45</div> {/* Time Card */}
                <div className="row2 schedule-row"></div> {/* Monday */}
                <div className="row2 schedule-row">Sparring</div> {/* Tuesday */}
                <div className="row2 schedule-row"></div> {/* Wednesday */}
                <div className="row2 schedule-row">Sparring</div> {/* Thursday */}
                <div className="row2 schedule-row"></div> {/* Friday */}
                <div className="row2 schedule-row"></div> {/* Saturday */}
                <div id="reviewsScroll"></div>
        </div>
    )
}