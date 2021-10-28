1. Create github clean project & clone to your pc
2. Initialize your backend in root folder of your project by default --- npm
   init -y
3. repository, keywords, author, licence, bugs, homepage - we may delete these
   fields in learning rep
4. Add script --- "server": "nodemon server.js" --- for starting backend &
   create server.js
5. Install main dependencies for backend in root of your project folder by ---
   npm i express cors dotenv nodemon
6. Add simplest express backend server by ---

---

const express = require('express'); const cors = require('cors'); const dotenv =
require('dotenv');

const app = express(); dotenv.config(); app.use(cors());
app.use(express.json());

app.get('/', (\_, res) => { res.send('API is running......'); });

const PORT = process.env.PORT || 5000; app.listen(PORT,
console.log(`Server started on port ${PORT}`));

---

7. Add .env & choose port for working backend on your pc by adding f.e. ---
   PORT=1234
8. Add --- node_modules, .env, package-lock.json --- to .gitignore
