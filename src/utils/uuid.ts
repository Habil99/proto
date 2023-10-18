type Uuid = {
  length?: number;
  prefix?: string;
  suffix?: string;
  type?: "alphanumeric" | "numeric" | "alpha";
};

/**
 * Generate a unique id
 * @param length - the length of the id, Default: 10
 * @param prefix
 * @param suffix
 * @param type - alphanumeric, numeric, alpha
 * @return {string}
 */
export const uuid = ({
  length = 15,
  prefix = "",
  suffix = "",
  type = "alphanumeric", // alphanumeric, numeric, alpha
}: Uuid = {}) => {
  let result = "";
  const numericCharactersUnicode = {
    startUnicode: 48,
    endUnicode: 57,
  };

  const lowercaseAlphaCharactersUnicode = {
    startUnicode: 97,
    endUnicode: 122,
  };

  const uppercaseAlphaCharactersUnicode = {
    startUnicode: 65,
    endUnicode: 90,
  };

  const characters = {
    alphanumeric: [
      numericCharactersUnicode,
      lowercaseAlphaCharactersUnicode,
      uppercaseAlphaCharactersUnicode,
    ],
    numeric: [numericCharactersUnicode],
    alpha: [lowercaseAlphaCharactersUnicode, uppercaseAlphaCharactersUnicode],
  };

  const characterSets = characters[type];

  for (let i = 0; i < length; i++) {
    const randomSetIndex = Math.floor(Math.random() * characterSets.length);
    const randomSet = characterSets[randomSetIndex];
    const randomUnicode = Math.floor(
      Math.random() * (randomSet.endUnicode - randomSet.startUnicode + 1) +
        randomSet.startUnicode,
    );
    result += String.fromCharCode(randomUnicode);
  }

  return `${prefix}${result}${suffix}`;
};
