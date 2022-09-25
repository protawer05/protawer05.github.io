function parseDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      return 'monday';
    case 2:
      return 'tuesday';
    case 3:
      return 'wednesday';
    case 4:
      return 'thursday';
    case 5:
      return 'friday';
    default:
      return 'error';
  }
}
const useTime = () => {
  const time = new Date();
  const dayNumber = time.getDay();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const dayNow = parseDay(dayNumber);
  const totalTime = hours * 3600 + minutes * 60 + seconds;
  return { dayNow, hours, minutes, seconds, totalTime };
};
export default useTime;
