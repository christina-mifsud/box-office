const app = require("./api.js");

const PORT = process.env.PORT | 9090;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
