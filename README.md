# Calculator_JS_Docker

This project is based on a revised example from the Udemy course Web Developer Bootcamp 2026. 
The latest update introduces Docker containerization, enabling the application to be deployed and accessed locally at http://localhost:8080.

The steps are:
1. docker build -t sass-compiler .

Calculator_JS_Docker/
│
├── index.html
├── style.scss
├── style.css      ← generated
└── script.js

2.  docker run --rm -v ${PWD}:/app sass-compiler

