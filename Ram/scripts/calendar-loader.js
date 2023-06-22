
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Birthday Party',
                start: '2023-07-01'
            },
            {
                title: 'Meeting',
                start: '2023-07-12T10:30:00',
                end: '2023-07-12T12:30:00'
            }
            // add more events as needed
        ]
    });
    calendar.render();
});