export const getHoursMinutes = (date: string) => {
  const dateObject = new Date(date);

  const hours = dateObject.getHours().toString().padStart(2, "0");
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};
