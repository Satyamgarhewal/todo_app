export const getWeekday = (passedDay) => {
  let presentDay;
  let weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  weekday.forEach((day) => {
    if (day.includes(passedDay)) {
      console.log("inside if block");
      presentDay = day;
    }
    return presentDay;
  });
  return presentDay;
};

export const getMonth = (passedMonth) => {
  let presentMonth;
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  months.forEach((month) => {
    if (month.toLowerCase().includes(passedMonth.toLowerCase())) {
      presentMonth = month;
    }
    return presentMonth;
  });
  return presentMonth;
};

export const getDate = (passedDate) => {
  let presentDate
  let splitDate = passedDate.split('');
  console.log('present date----/-', splitDate[0], splitDate[1])
  if (splitDate[0] == 0) {
    presentDate = splitDate[1];
  } else {
    presentDate = passedDate;
  }
  console.log(presentDate)
  return presentDate;
};
