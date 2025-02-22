 const express =`
import express from "express"
import cors from "cors"
import session from "express-session"
import passport from "passport"
import mongoose from "mongoose"
const app = express()

let mongoDb = process.env.mongodb
const PORT = process.env.PORT || 4000;

mongoose.connect(mongoDb).then(() => console.log("connected to database"))

app.set('trust proxy', 1); // Trust the first proxy
app.use(cors({
    origin: "*",
    credentials : true
}))
app.use(express.json())
app.use(session({
    secret : "secret",
    resave : false,
    saveUninitialized : false,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24 * 7 ,
        httpOnly: true,
        sameSite: 'None',  // Allow cross-origin cookies
        secure : true
    }
}))
app.use(passport.initialize())
app.use(passport.session())

app.get("/",  (request, response)=> {
    response.send("hello world")
})



app.listen(PORT, () => console.log("express server is listening.............."))
`


 const php = `
<?php

session_start();

$uri = $_SERVER['REQUEST_URI'];

$routes = [
'/' => 'controller/home.php',
'/about_us' => 'controller/about_us.php',
'/contact' => 'controller/contact.php',
];


if(array_key_exists($uri, $routes))
{
    require($routes[$uri]);
}else{
    echo 'page not found';
}


`

const htaccess = `
# Enable Rewrite Engine
RewriteEngine On

# Redirect all requests to index.php if the file or directory doesn't exist
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [L]
`

const node = `
const http = require("http");

// Define the server port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Handle routes
  if (req.url === "/" && req.method === "GET") {
    res.end("Welcome to the Node.js server!");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("This is the About page.");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Start the server
server.listen(PORT, () => {
  console.log("Server is running.........");
});

`
 const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap and jQuery Template</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-XLM6KY5tWNFftqcp8VHB6ewvWWscBRXHIFHfhy1ZvUjA0JTwDqCpZX2wRPI0EnYF" crossorigin="anonymous">
</head>
<body>
  
  <!-- Your content goes here -->

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha384-Q8QmC3GUrDxMeo+e3CW3jlbbHg9ftM/nc9Fekjp3Hg6pOCj+ym5UM8tvHefBOIHu" crossorigin="anonymous"></script>
  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qX2Ao3CWNO/Gkg71g2BhKy9NNni3KciWFKJoZb8fD8G5FdnxGlIC/HuIDkEZ+PCD" crossorigin="anonymous"></script>
</body>
</html>
`
const css = `
@tailwind base;
@tailwind components;
@tailwind utilities;



body {

  font-family: Arial, Helvetica, sans-serif;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
} 

.button {
  @apply px-4 py-2 bg-black text-white rounded-lg hover:bg-stone-900 transition duration-300 ease-in-out;
}

.card {
  @apply bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out;
}

/* Input Styles */
.input {
  @apply px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-gray-700 placeholder-gray-500 bg-white transition duration-300 ease-in-out shadow-sm hover:shadow-md;
}
`

const gitignore = `
# Node.js
node_modules/
npm-debug.log
yarn-error.log
.env

# Logs
logs
*.log

# Editor files
.vscode/
.idea/
*.swp

# Build
build/
dist/

# OS files
.DS_Store
Thumbs.db
`

const tsconfig = `
{
  "compilerOptions": {
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./",                                  /* Specify the root folder within your source files. */
    "outDir": "dist",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
`

 export const tempaltesData = [
    {
        name : "express",
        color : "text-yellow-600",
        code : express
    },
    {
        name : "php",
        color : "text-purple-600",
        code : php
    },
    {
      name : ".htaccess",
      color : "text-stone-300",
      code : htaccess
  },
    {
        name : "node js",
        color : "text-green-600",
        code : node
    },
    {
        name : "html",
        color : "text-orange-700",
        code : html
    },
    {
        name : "css",
        color : "text-blue-500",
        code : css
    },
    {
      name : "gitignore",
      color : "text-orange-600",
      code : gitignore
    },
    {
      name : "tsConfig",
      color : "text-blue-500",
      code : tsconfig
    },
]


