const myBirthday = "2024-06-20";

function countdown() {
  const myBirthdaydate = new Date(myBirthday);
  const today = new Date();

  const diffMs = myBirthdaydate - today;
  const diffDays = Math.floor(diffMs / 86400000); // days
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  const diffMins = Math.floor((diffMs % 3600000) / 60000); // minutes
  const diffSecs = Math.floor((diffMs % 60000) / 1000); // seconds

  document.getElementById("day").textContent = diffDays;
  document.getElementById("hour").textContent = String(diffHrs).padStart(2, "0");
  document.getElementById("minute").textContent = String(diffMins).padStart(2, "0");
  document.getElementById("second").textContent = String(diffSecs).padStart(2, "0");
}

countdown();
setInterval(countdown, 1000);