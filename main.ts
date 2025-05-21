import express from 'npm:express';
import calculate from './calculate.ts';
import expressLayouts from 'npm:express-ejs-layouts';

const app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', (_, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/result', (req, res) => {
  let { firstName, secondName } = req.query;

  if (typeof firstName === 'undefined' || typeof secondName === 'undefined') {
    return res.sendStatus(400);
  }

  firstName = String(firstName);
  secondName = String(secondName);

  if (!firstName.trim() || !secondName.trim()) {
    return res.sendStatus(400);
  }

  const resultA = calculate(firstName.toLowerCase(), secondName.toLowerCase());
  const resultB = calculate(secondName.toLowerCase(), firstName.toLowerCase());

  res.render('result', {
    title: `Results for ${firstName} and ${secondName}`,
    resultA,
    resultB,
    firstName,
    secondName,
  });
});

app.listen(8000);
console.log(`Server is running on http://localhost:8000`);
