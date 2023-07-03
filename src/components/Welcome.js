import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Welcome() {
  // Countdown
  const [day1, setDay1] = useState(0);
  const [day2, setDay2] = useState(0);

  const [hour1, setHour1] = useState(0);
  const [hour2, setHour2] = useState(0);

  const [minute1, setMinute1] = useState(0);
  const [minute2, setMinute2] = useState(0);

  const [second1, setSecond1] = useState(0);
  const [second2, setSecond2] = useState(0);

  // Timer
  const countDown = () => {
    const dueDate = new Date("May 28, 2023 00:00").getTime();
    const currentDate = new Date().getTime();

    const remainings = dueDate - currentDate;

    if (remainings > 0) {
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;

      // Remainings
      let remainingDay = Math.floor(remainings / day);
      let remainingHour = Math.floor((remainings % day) / hour);
      let remainingMinute = Math.floor((remainings % hour) / minute);
      let remainingSecond = Math.floor((remainings % minute) / second);

      // Day
      let dayLength = remainingDay.toString().length;

      if (dayLength === 1) {
        setDay1(0);
        setDay2(remainingDay);
      } else if (dayLength === 2) {
        remainingDay = remainingDay.toString().split("");

        setDay1(remainingDay[0]);
        setDay2(remainingDay[1]);
      }

      // Hour
      let hourLength = remainingHour.toString().length;

      if (hourLength === 1) {
        setHour1(0);
        setHour2(remainingHour);
      } else if (hourLength === 2) {
        remainingHour = remainingHour.toString().split("");

        setHour1(remainingHour[0]);
        setHour2(remainingHour[1]);
      }

      // Minute
      let minuteLength = remainingMinute.toString().length;

      if (minuteLength === 1) {
        setMinute1(0);
        setMinute2(remainingMinute);
      } else if (minuteLength === 2) {
        remainingMinute = remainingMinute.toString().split("");

        setMinute1(remainingMinute[0]);
        setMinute2(remainingMinute[1]);
      }

      // Second
      let secondLength = remainingSecond.toString().length;

      if (secondLength === 1) {
        setSecond1(0);
        setSecond2(remainingSecond);
      } else if (secondLength === 2) {
        remainingSecond = remainingSecond.toString().split("");

        setSecond1(remainingSecond[0]);
        setSecond2(remainingSecond[1]);
      }
    } else {
      setDay1(0);
      setDay2(0);

      setHour1(0);
      setHour2(0);

      setMinute1(0);
      setMinute2(0);

      setSecond1(0);
      setSecond2(0);
    }
  };

  setInterval(countDown, 1000);
  return (
    <div>
      <div className="welcome">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="welcome-content">
                <h1>Comming Soon</h1>
                <p>
                10,000 NONCHALANT BANDITS SHAPING THE COURSE OF GOLF
                </p>
              </div>
            </div>
            <div className="col-md-11 ">
              <div className="timer-wrapper">
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="time-show-box">
                      <h2>
                        {day1}
                        {day2}
                      </h2>
                      <p>Days</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="time-show-box">
                      <h2>
                        {hour1}
                        {hour2}
                      </h2>
                      <p>Hours</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="time-show-box">
                      <h2>
                        {minute1}
                        {minute2}
                      </h2>
                      <p>Minutes</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="time-show-box">
                      <h2>
                        {second1}
                        {second2}
                      </h2>
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>

                <div className="enter-btn">
                  <Link to="/home" className="btn-enter">
                    Enter Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
