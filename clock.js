// Clock
const startClock = () => {
    const today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = formatTime(hr);
    min = formatTime(min);
    sec = formatTime(sec);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const curWeekDay = days[today.getDay()];
    const curDay = today.getDate();
    const curMonth = months[today.getMonth()];
    const curYear = today.getFullYear();
    const date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;

    document.getElementById("clock").innerHTML = `${date}, ${hr}:${min}:${sec} ${ap}`;

    const time = setTimeout(() => { startClock() }, 500);
};

const formatTime = (val) => {
    if (val < 10) {
        val = "0" + val;
    }
    return val;
};
