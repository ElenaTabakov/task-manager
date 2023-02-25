export const formatDate = (date: Date) => {
  const d = date.getDate();
  const dd = d < 10 ? `0${d}` : d;
  const m = date.getMonth() + 1;
  const mm = m < 10 ? `0${m}` : m;
  const y = date.getFullYear();
  const fullDate = `${mm}-${dd}-${y}`;
  return fullDate;
};

export const fullDateISO = (dateDay: Date, dateTime:Date) => {
  const hours = dateTime.getHours();
  const hoursF = hours < 10 ? `0${hours}` : hours;
  const minutes = dateTime.getMinutes();
  const minutesF = minutes < 10 ? `0${minutes}` : minutes;
  const month = dateDay.getMonth();
  const monthF = month < 10 ? `0${month + 1}` : month;
  const day = dateDay.getDate();
  const dayF = day < 10 ? `0${day}` : day;
  const year = dateDay.getFullYear();

  const fullDate = new Date(
    `${year}-${monthF}-${dayF}T${hoursF}:${minutesF}:00.000Z`
  ).toISOString();

  console.log(fullDate, 'utils');
  return fullDate;
};
