function generateTemp() {
  return Math.floor(Math.random() * (27 - 23)) + 23;
}

function getAllTemperatures() {
  const temps = {
    8: generateTemp(),
    9: generateTemp(),
    14: generateTemp(),
    4: generateTemp(),
    11: generateTemp(),
  };

  return temps;
}

module.exports = getAllTemperatures;
