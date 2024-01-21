const app = require("./app");
const port = process.env.PORT_SERVER || 8080;
const server = app.listen(port, () => {
    console.log(
      `Server is running on http://localhost:${port}`
    );
});