//イベント名を取得するコード
function GetDetail(EventName, Counter = 0, calendarId = "primary") {
  // getday(counter=1 means tomorrow, default is today)
  var EventDay = new Date();
  EventDay.setDate(EventDay.getDate() + Counter);

  // start of the day
  var start = new Date(EventDay.getFullYear(), EventDay.getMonth(), EventDay.getDate(), 0, 0, 0);

  // end of the day
  var end = new Date(EventDay.getFullYear(), EventDay.getMonth(), EventDay.getDate(), 23, 59, 59);

  // get ALL events of the day
  var events = CalendarApp.getCalendarById(calendarId).getEvents(start, end);

  // search event with assigned name
  for (var i = 0; i < events.length; i++) {
    if (events[i].getTitle() === EventName) {
      // Format start time and end time as HH:mm
      var startTimeFormatted = Utilities.formatDate(events[i].getStartTime(), "JST", "HH:mm");
      var endTimeFormatted = Utilities.formatDate(events[i].getEndTime(), "JST", "HH:mm");

      // return event details as object with formatted start and end time
      return {
        title: events[i].getTitle(),
        startTime: startTimeFormatted,
        endTime: endTimeFormatted,
        location: events[i].getLocation(),
        description: events[i].getDescription()
      };
    }
  }

  // Without assigned event, return null
  return null;
}