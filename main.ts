import calculate from './calculate.ts';

(function ask() {
  const input = prompt('> ') ?? '';

  if (input === 'exit') return;

  const output = (() => {
    const names = input.toLowerCase().split('and');

    const firstName = names[0]?.trim();
    const secondName = names[1]?.trim();

    if (!firstName || !secondName) {
      return new Error('Something went wrong!');
    }

    return [
      `${firstName} loves ${secondName} ${calculate(firstName, secondName)}`,
      `${secondName} loves ${firstName} ${calculate(secondName, firstName)}`,
    ];
  })();

  if (output instanceof Error) {
    console.log('%c' + output.message, 'color: red');
  } else {
    console.log('%c' + output?.join('\n'), 'color: blue');
  }

  ask();
})();

console.log('Bye bye 👋! I hope you enjoyed the program 😊!');
