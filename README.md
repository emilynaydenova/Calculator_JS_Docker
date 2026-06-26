## Calculator_JS_Docker

### 📚 Project Background

This project is based on a revised example from the **Udemy course _Web Developer Bootcamp 2026_**.

### 🐳 Docker Update

The latest update introduces **Docker containerization**, allowing the application to run locally.

🌐 Access the app at: http://localhost:8080

### 📁 Project Structure

The project is organized as follows:

```
Calculator_JS_Docker/
│
├── index.html       # Main HTML file
├── style.scss       # Source SCSS styles
├── style.css        # Compiled CSS (auto-generated)
└── script.js        # Application logic
```


### 🚀 Project Setup

#### 🐳 Prerequisites
- Docker Desktop installed and running

---

#### ⚙️ Steps to Run

###### 1. Start Docker Desktop
Make sure Docker is running before executing any commands.

---

##### 2. 🧱 Build Sass Compiler Image
```sh
docker build -t sass-compiler .
```

---

##### 3. ▶️ Run Sass Compiler Container
```sh
docker run --rm -v ${PWD}:/app sass-compiler
```

> ⚠️ Note:  
> `${PWD}` works in PowerShell.  
> Use `%cd%` in Command Prompt.

---

##### 4. 🧮 Start Calculator App
```sh
docker compose up
```

---

##### 📌 Notes
- Run all commands from the project root directory
- Ensure Docker Desktop is fully started before running commands



