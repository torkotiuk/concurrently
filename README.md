## To create build tool for starting back-, frontend concurrently choose ONE OF THE TWO WAYS:

# =============================================== ================== FIRST WAY

1. Create github clean project & clone to your pc
2. Initialize your backend in root folder of your project by default --- npm
   init -y
3. repository, keywords, author, licence, bugs, homepage - we may delete these
   fields in learning rep
4. Add script --- "server": "nodemon server.js" --- for starting backend &
   create server.js
5. Install main dependencies for backend in root of your project folder by ---
   npm i express cors dotenv --- & --- npm i nodemon -D ---
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
8. Add --- node_modules/, .env, package-lock.json --- to .gitignore

9. Create frontend folder, go there in console & --- npx create-react-app . ---
10. Add to .gitignore

---

frontend/node_modules  
frontend/package-lock.json

---

11. Delete all files in src folder except App.js & index.js
12. Delete all code in App.js & add simplest functional component

---

const App = () => { return <div>App</div>; }; export default App;

---

13. In package.json of the whole project add script for starting frontend (add
    to projectNameFolder/package.json, NOT in
    projectNameFolder/frontend/package.json)

---

"client": "npm start --prefix frontend"

---

14. To start frontend & backend together install --- npm i concurrently -D --- &
    add script

---

"dev": "concurrently \"npm run server\" \"npm run client\""

---

15. For deployment f.e. to heroku:

- a) build your frontend by starting in frontend folder --- npm run build ---
- b) change in server.js

---

app.get('/', (\_, res) => { res.send('API is running......'); });

---

to

---

dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(\*\*dirname, '/frontend/build')));

app.get('\*', (_, res) => { res.sendFile(path.resolve(\_\_dirname, 'frontend',
'build', 'index.html')); }); } else { app.get('/', (_, res) => { res.send('API
notes backend is running......'); }); }

---

also add next line (const path = require('path');) for using path on the
beginning of the server.js

- c) in .env add NODE_ENV=production

To sum up, in this case starting --- npm run server --- our frontend will work
on PORT of server

# ===============================================

===============================================

# =============================================== ================== SECOND WAY

1. Clone this repository
2. Create .env file, choose PORT
3. Choose development or production for NODE_ENV

- a) development - when you develop fron- & backend (back- & frontend will work
  in different ports)
- b) production - when you build frontend by -npm run build- in frontend folder
  and deploy github repository to heroku). Also when we start only backend by
  -npm run server- our frontend will work on the same port.
