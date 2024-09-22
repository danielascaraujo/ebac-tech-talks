// Links do AOS (animações) https://michalsnik.github.io/aos/
// https://github.com/michalsnik/aos

AOS.init();

const eventDate = new Date("Dec 14, 2024 09:00:00");
const eventTimeStamp = eventDate.getTime();

const countTheTime = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilTheEvent = eventTimeStamp - currentTimeStamp;

    const msDays = 1000 * 60 * 60 * 24;
    const msHours = 1000 * 60 * 60;
    const msMinutes = 1000 * 60;

    const daysUntilTheEvent = Math.floor(timeUntilTheEvent / msDays);
    const hoursUntilTheEvent = Math.floor((timeUntilTheEvent % msDays) / msHours);
    const minutesUntilTheEvent = Math.floor((timeUntilTheEvent % msHours) / msMinutes);
    const secondsUntilTheEvent = Math.floor((timeUntilTheEvent % msMinutes) / 1000);

    document.getElementById('countdown').innerHTML = `começa em ${daysUntilTheEvent}d ${hoursUntilTheEvent}h ${minutesUntilTheEvent}m ${secondsUntilTheEvent}s`;

    if (timeUntilTheEvent < 0) {
        clearInterval(countTheTime);
        document.getElementById('countdown').innerHTML = 'já acabou :('
    }
}, 1000);