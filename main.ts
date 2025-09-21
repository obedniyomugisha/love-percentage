import express from 'npm:express';
import calculate from './calculate.ts';
import expressLayouts from 'npm:express-ejs-layouts';

const app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', (_, res) => {
  res.render('index', {
    title: 'Home',
    description: 'Know how much you love each other using our app!',
  });
});

app.get('/results', (req, res) => {
  let { firstName, secondName } = req.query;

  if (typeof firstName === 'undefined' || typeof secondName === 'undefined') {
    return res.sendStatus(400);
  }

  firstName = String(firstName).trim().toLowerCase();
  secondName = String(secondName).trim().toLowerCase();

  if (!firstName || !secondName) {
    return res.sendStatus(400);
  }

  const results = calculate(firstName, secondName);

  const newFirstName = firstName[0].toUpperCase() + firstName.slice(1);
  const newSecondName = secondName[0].toUpperCase() + secondName.slice(1);

  res.render('results', {
    title: `Results for ${newFirstName} and ${newSecondName}`,
    description: `${newFirstName} loves ${newSecondName} ${results}`,
    firstName,
    secondName,
  });
});

app.listen(8000);
console.log(`Server is running on http://localhost:8000`);
