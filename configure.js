const yaml = require('js-yaml');
const path = require('path')
const fs = require('fs')
module.exports = class Configure {
  async config(req, ondata, kernel) {
    console.log("## set", req)
    const file = await fs.promises.readFile(path.resolve(__dirname, "app/config.yaml"), 'utf8')
    console.log("FILE", file)
    const parsed = yaml.load(file)
    console.log("parsed", parsed)
    parsed.API.BASE_URL = "http://localhost:11434/v1"
    parsed.API.API_KEY = "dummy"
    parsed.API.LOGICAL_MODEL = "llama3"
    parsed.API.LARGE_LOGICAL_MODEL = "llama3"
    console.log("parsed after", parsed)
    const dumped = yaml.dump(parsed)
    console.log("dumped", dumped)
    await fs.promises.writeFile(path.resolve(__dirname, "app/config.yaml"), dumped)
  }
}
