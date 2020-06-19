function generateTemp() {
  return Math.floor(Math.random() * (27 - 23)) + 23;
}

function getAllTemperatures() {
  const temps = {
    1: generateTemp(),
    5: generateTemp(),
    6: generateTemp(),
    9: generateTemp(),
    14: generateTemp(),
    15: generateTemp(),
  };

  return temps;
}

module.exports = getAllTemperatures;
