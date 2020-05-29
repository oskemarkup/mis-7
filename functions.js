function map(text) {
  return text.replace(/[^a-zA-Zа-яА-Я ]/gi, '').split(' ').filter(Boolean).map(word => [word, 1]);
}

function sort(mapped) {
  return mapped.sort((elementA, elementB) => {
    const wordA = elementA[0].toLowerCase();
    const wordB = elementB[0].toLowerCase();

    if (wordA < wordB) {
      return -1;
    }

    if (wordA > wordB) {
      return 1;
    }

    return 0;
  });
}

function reduce(sorted) {
  return sorted.reduce((a,b) => {
    const last = a.pop();

    if (!last) {
      return [b];
    }

    if (last[0] === b[0]) {
      last[1]++;
      return a.concat([last]);
    }

    return a.concat([last, b]);
  }, []);
}
