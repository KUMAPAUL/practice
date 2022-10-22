const express = require("express");
const app = express();
app.use(express.json());

let eric = [
  { id: 1, name: "Eric1" },
  { id: 2, name: "Eric2" },
  { id: 3, name: "Eric3" },
  { id: 4, name: "Eric4" },
];

// 把eric存放在req結構裡
app.use((req, res, next) => {
  req.eric = eric;
  next();  // 一定要call next
})

// middleware example...
/*
app.get("/api/getMyData", func1(), func2())
const func1 = (req, res, next) => {
  //...
  next();
}
const func2 = (req, res, next) => {
  //...
  res.status(200).send();
}
*/


/*
app.get("/api/list", (req, res) => {
  console.log(eric);
  res.send(eric);
});

app.get("/api/list/byid/:id", (req, res) => {
  const Eric = eric.find((x) => x.id === parseInt(req.params.id));
  if (!Eric) res.status(404).send("查無此id");
  res.send(Eric);
});

app.get("/api/list/byname/:name", (req, res) => {
  const Eric = eric.find((x) => x.name === req.params.name);

  if (!Eric) res.status(404).send("查無此id");
  res.send(Eric);
});

app.post("/api/add", (req, res) => {
  if (!req.body.name || req.body.name.length < 2) {
    res.status(400).send("名字請輸入兩個字以上");
    return;
  }

  const Eric = {
    id: eric.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  eric.push(Eric);
  res.send(eric);
});

app.put("/api/replace/:id", (req, res) => {
  const Eric = eric.find((x) => x.id === parseInt(req.params.id));
  if (!Eric) res.status(404).send("查無此id");

  Eric.name = req.body.name;
  Eric.age = req.body.age;
  res.send(eric);
});

app.delete("/api/remove/:id", (req, res) => {
  const Eric = eric.find((x) => x.id === parseInt(req.params.id));
  if (!Eric) {
    res.status(404).send("查無此id");
    return;
  }

  eric.splice(eric.indexOf(Eric), 1);
  res.send(eric);
});
*/
const route_demo = require('./routes/demo');
app.use('/api', route_demo);

const port = process.env.PORT || 2222;
app.listen(port, () => console.log(`Listening on port ${port}...`));
