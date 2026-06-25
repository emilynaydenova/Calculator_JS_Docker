# Calculator_JS_Docker

This is a revised example from the course Web Developer Bootcamp 2026 - Udemy.
The new is adding Docker containers to run at localhost:8080.

The steps are:
1. docker build -t sass-compiler .

Calculator_JS_Docker/
│
├── index.html
├── style.scss
├── style.css      ← generated
└── script.js

2.  docker run --rm -v ${PWD}:/app sass-compiler

