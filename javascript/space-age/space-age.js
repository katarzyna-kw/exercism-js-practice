export const age = (planet, ageInEarthSeconds) => {
  let ageInEarthYears = (ageInEarthSeconds/31557600);
  let ageInYears;
  if (planet === "earth") {
    return parseFloat((ageInEarthYears).toFixed(2));
  } else if (planet === "mercury") {
    ageInYears = ageInEarthYears / 0.2408467;
  } else if (planet === "venus") {
    ageInYears = ageInEarthYears / 0.61519726
  } else if (planet === "mars") {
    ageInYears = ageInEarthYears / 1.8808158
  } else if (planet === "jupiter") {
    ageInYears = ageInEarthYears / 11.862615
  } else if (planet === "saturn") {
    ageInYears = ageInEarthYears / 29.447498
  } else if (planet === "uranus") {
    ageInYears = ageInEarthYears / 84.016846
  } else if (planet === "neptune") {
    ageInYears = ageInEarthYears / 164.79132
  }
  return parseFloat((ageInYears.toFixed(2)));
};