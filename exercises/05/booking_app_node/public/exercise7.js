function cancelSchedule(scheduleID) {
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", `/api/schedules/${scheduleID}`);
  xhr.onloadend = () => {
    if (xhr.status === 204) {
      alert("Schedule cancelled");
    } else {
      alert(xhr.responseText);
    }
  };
  xhr.send();
}

function cancelBooking(bookingID) {
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", `/api/schedules/${bookingID}`);
  xhr.onloadend = () => {
    if (xhr.status === 204) {
      alert("Booking cancelled");
    } else {
      alert(xhr.responseText);
    }
  };
  xhr.send();
}