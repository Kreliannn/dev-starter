
export const express =`
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


export const php = `
<?php

// Define the routes as an associative array
$routes = [
    '/' => 'home',
    '/about' => 'about',
    '/contact' => 'contact',
];

// Get the current URL path
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Function to handle 404 errors
function notFound() {
    http_response_code(404);
    echo "<h1>404 Not Found</h1>";
    exit;
}

// Route handling
if (array_key_exists($requestUri, $routes)) {
    // Call the corresponding function based on the route
    $function = $routes[$requestUri];
    if (function_exists($function)) {
        $function();
    } else {
        notFound();
    }
} else {
    notFound();
}

//.htaccess codes
/*
# Enable Rewrite Engine
RewriteEngine On

# Redirect all requests to index.php if the file or directory doesn't exist
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [L]
*/

`