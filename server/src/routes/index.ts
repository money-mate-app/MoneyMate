import { app } from "../connections";

app.get("/", (req, res, next) => {
  try {
    const pkgJson = require("../../package.json");
    const status = "active";
    const version = pkgJson.version;
    res.status(200).json({
      server: status,
      version,
    });
  } catch (err) {
    res.status(500).json({
      server: "inactive",
    });
  }
});
