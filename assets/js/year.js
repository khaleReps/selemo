// Imports
let date = new Date();


// Variables
const current_year = date.getFullYear();
const current_month = date.getMonth();
const months = [
                    "January", "February", "March", 
                    "April", "May", "June", 
                    "July", "August", "September", 
                    "October", "November", "December"
                ];

const weekdays = [
                    "Sunday", "Monday", "Tuesday", 
                    "Wednesday", "Thursday", "Friday", 
                    "Saturday"
                ];


// Function to create the calendar
function createCalendar(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  let calendarHtml = '<table class="table table-bordered">';
  calendarHtml += '<thead><tr>';
  for (let day of weekdays) {
    calendarHtml += `<th scope="col">${day}</th>`;
  }
  calendarHtml += '</tr></thead><tbody><tr>';

  let day = 1;
  for (let i = 0; i < 42; i++) {
    if (i >= firstDayOfWeek && day <= daysInMonth) {
      calendarHtml += `<td>${day}</td>`;
      day++;
    } else {
      calendarHtml += '<td></td>';
    }

    if (i % 7 === 6 && day <= daysInMonth) {
      calendarHtml += '</tr><tr>';
    }
  }

  calendarHtml += '</tr></tbody></table>';
  return calendarHtml;
}

// Function to update the month and year display
function updateMonthAndYearDisplay(year, month) {
    const monthDisplay = document.getElementById("month");
    const yearDisplay = document.getElementById("year");
  
    monthDisplay.innerText = months[month];
    yearDisplay.innerText = year;
  }
  

// Output to HTML
document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const calendarContainer = document.getElementById("calendar");
  calendarContainer.innerHTML = createCalendar(currentYear, currentMonth);

  updateMonthAndYearDisplay(currentYear, currentMonth);
});
