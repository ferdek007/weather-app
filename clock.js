// Clock
const startClock = () => {
    const today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    hr = formatTime(hr);
    min = formatTime(min);
    sec = formatTime(sec);

    const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
    const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const curWeekDay = days[today.getDay()];
    const curDay = today.getDate();
    const curMonth = months[today.getMonth()];
    const curYear = today.getFullYear();
    const date = `${curWeekDay}, ${curDay} ${curMonth} ${curYear}`;

    document.getElementById("clock").innerHTML = `${hr}:${min}:${sec}`;
    document.getElementById("date").innerHTML = date;

    const time = setTimeout(() => { startClock() }, 500);
};

const formatTime = (val) => {
    if (val < 10) {
        val = "0" + val;
    }
    return val;
};
