function generateTemp() {
  return (Math.floor(Math.random() * (260 - 240)) + 240)/10;
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
