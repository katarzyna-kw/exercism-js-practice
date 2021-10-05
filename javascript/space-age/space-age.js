const ORBITALS={
  "Mercury": 0.2408467,
  "Venus": 0.61519726,
  "Earth": 1,
  "Mars": 1.8808158,
  "Jupiter": 11.862615,
  "Saturn":  29.447498,
  "Uranus": 84.016846,
  "Neptune": 164.79132
}

export const age = (planet, ageInEarthSeconds) => {
  let ageInEarthYears = (ageInEarthSeconds/31557600);
  let orbitalPeriod;
  for (let key in ORBITALS) {
    if (key.toLowerCase()===planet)
      orbitalPeriod=ORBITALS[key]
  }
  return Number((ageInEarthYears/orbitalPeriod).toFixed(2))
};