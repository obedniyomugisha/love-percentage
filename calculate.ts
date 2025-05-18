export default function (firstName: string, secondName: string): string {
  return simplify(namesToNumbers(firstName + 'loves' + secondName));
}

function namesToNumbers(input: string): string {
  const allLetters = input.split('');
  let result = '';
  const checked: string[] = [];

  for (const letter of allLetters) {
    if (checked.includes(letter)) continue;

    result += allLetters.filter((value) => value === letter).length;
    checked.push(letter);
  }

  return result;
}

function simplify(input: string): string {
  if (+input <= 100) return input + '%';

  return simplify(
    (() => {
      const splittedNumbers = input.split('');
      const newNumbers: string[] = [];
      const len = splittedNumbers.length;

      for (let i = 0; i < Math.floor(len / 2); i++) {
        newNumbers.push(
          String(+splittedNumbers[i] + +splittedNumbers[len - (i + 1)])
        );
      }

      if (len % 2) {
        newNumbers.push(splittedNumbers[Math.floor(len / 2)]);
      }

      return newNumbers.join('');
    })()
  );
}
