function solution(keymap, targets) {
  const alphabetToPress = {};

  keymap.forEach((key, index) => {
    for (i = 0; i < key.length; i++) {
      const char = key[i];

      if (!alphabetToPress[char] || alphabetToPress[char] > i + 1) {
        alphabetToPress[char] = i + 1;
      }
    }
  });

  return targets.map((target) => {
    let pressCount = 0;

    for (i = 0; i < target.length; i++) {
      const char = target[i];

      if (!alphabetToPress[char]) {
        return -1;
      }

      pressCount += alphabetToPress[char];
    }

    return pressCount;
  });
}