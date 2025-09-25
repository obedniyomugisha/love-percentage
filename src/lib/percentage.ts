export default function calculateLovePercentage(
  firstName: string,
  secondName: string
): number[] {
  const combinedNames = `${firstName}loves${secondName}`;
  const numberSequence = namesToNumbers(combinedNames);
  return getAllSimplificationSteps(numberSequence);
}

function namesToNumbers(input: string): string {
  const characters = input.toLowerCase().split('');
  const charCount = new Map<string, number>();

  characters.forEach((char) => {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  });

  return Array.from(charCount.values()).join('');
}

function getAllSimplificationSteps(input: string): number[] {
  const steps: number[] = [Number(input)];

  let current = input;
  while (+current > 100) {
    current = sumAdjacentDigits(current);
    steps.push(Number(current));
  }

  return steps;
}

function sumAdjacentDigits(number: string): string {
  const digits = number.split('');
  const length = digits.length;
  const result: number[] = [];

  for (let i = 0; i < Math.floor(length / 2); i++) {
    result.push(Number(digits[i]) + Number(digits[length - 1 - i]));
  }

  if (length % 2) {
    result.push(Number(digits[Math.floor(length / 2)]));
  }

  return result.join('');
}
