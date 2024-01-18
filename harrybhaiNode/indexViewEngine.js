import express from "express";
let app = express();

app.set("view engine", "ejs");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index.ejs", { sitename: "Gajanan", arr: [10, 20, 30, 40] });
});

app.get("/hbs", (req, res) => {
  res.render("indexhandle.hbs", { sitename: "Gajanan Bodhankar" });
});

app.listen(3000, () => {
  console.log("listening to ", 3000);
});
