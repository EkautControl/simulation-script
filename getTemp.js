function generateTemp(type) {
  if (type === 0) {
    return (Math.floor(Math.random() * (127 - 113)) + 113) / 10;
  }
  return (Math.floor(Math.random() * (187 - 173)) + 173) / 10;
}

function getAllTemperatures() {
  const temps = {
    1: generateTemp(1),
    3: generateTemp(1),
    4: generateTemp(1),
    9: generateTemp(0),
    17: generateTemp(1),
    21: generateTemp(0),
  };

  return temps;
}

module.exports = getAllTemperatures;
