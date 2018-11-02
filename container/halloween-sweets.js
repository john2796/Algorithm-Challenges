function pick(bags, scale) {
  if (bags.length === 3) {
    const result = scale.weigh([bags[0]], [bags[1]]);
    if (result === 0) {
      return bags[2];
    } else if (result === -1) {
      return bags[0];
    } else {
      return bags[1];
    }
  }

  const groupOne = bags.slice(0, 3);
  const groupTwo = bags.slice(3, 6);
  const groupThree = bags.slice(6);

  const result = scale.weigh(groupOne, groupTwo);
  if (result === 0) {
    return pick(groupThree, scale);
  } else if (result === -1) {
    return pick(groupONe, scale);
  } else {
    return pick(groupTwo, scale);
  }

  return bags;
}
