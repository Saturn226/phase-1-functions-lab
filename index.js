// Code your solution in this file!
const distanceFromHqInBlocks = (start) => {
  const end = 42;
  return Math.abs(end - start);
};

const distanceFromHqInFeet = (start) => {
  return distanceFromHqInBlocks(start) * 264;
};

const distanceTravelledInFeet = (start, end) => {
  return Math.abs(end - start) * 264;
};

const calculatesFarePrice = (start, end) => {
  const distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return 0;
  }

  if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  }
  if (distance > 2000 && distance < 2500) {
    return 25;
  }

  return "cannot travel that far";
};
