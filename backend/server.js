require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Example usage of other environment variables
const dbUrl = process.env.DATABASE_URL;
const secretKey = process.env.SECRET_KEY;

console.log('Database URL:', dbUrl);
console.log('Secret Key:', secretKey);




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bfhlRoutes = require('./src/routes/bfhlRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/bfhl', bfhlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
