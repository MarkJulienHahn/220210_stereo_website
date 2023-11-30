const transformDateFormat = (dateString) => {
  const months = [
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

  const [year, month, day] = dateString.split("-");
  const monthIndex = parseInt(month, 10) - 1;

  const transformedDate = `${months[monthIndex]} ${parseInt(day, 10)}, ${year}`;
  return transformedDate;
};

export default transformDateFormat;
