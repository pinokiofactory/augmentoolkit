module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/e-p-armstrong/augmentoolkit app",
          //"git clone https://github.com/peanutcocktail/augmentoolkit app",
          "npm install"
        ]
      }
    },
    {
      uri: "configure.js",
      method: "config",
      params: {
        val: ""
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip install -r requirements.txt"
        ]
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        message: [
          "ollama pull llama3"
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    },
  ]
}
