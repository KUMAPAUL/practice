const express = require('express');
const router = express.Router();

router.get("/list", (req, res) => {
    const eric = req && req.eric ? req.eric : [];
    console.log(req.eric);
    res.status(200).send(req.eric);
});
  
router.get("/list/byid/:id", (req, res) => {
    const eric = req && req.eric ? req.eric : [];
    const Eric = eric.find((x) => x.id === parseInt(req.params.id));
    if (!Eric) res.status(404).send("查無此id");
    res.send(Eric);
});
  
router.get("/list/byname/:name", (req, res) => {
    //const Eric = eric.find((x) => x.name === req.params.name);
    if (!req || !req.eric) {
        return res.status(500).send("array(eric) is not exist");
    }
    const Eric = req.eric.find((x) => x.name === req.params.name);
  
    if (!Eric) res.status(404).send("查無此id");
    res.send(Eric);
});
  
router.post("/add", (req, res) => {
    if (!req.body.name || req.body.name.length < 2) {
      res.status(400).send("名字請輸入兩個字以上");
      return;
    }

    if (!req || !req.eric) {
        return res.status(500).send("array(eric) is not exist");
    }
  
    const Eric = {
      //id: eric.length + 1,
      id : req.eric.length + 1, 
      name: req.body.name,
      age: req.body.age,
    };
    //eric.push(Eric);
    req.eric.push(Eric);
    res.send(eric);
});
  
router.put("/replace/:id", (req, res) => {
    //const Eric = eric.find((x) => x.id === parseInt(req.params.id));
    if (!req || !req.eric) {
        return res.status(500).send("array(eric) is not exist");
    }
    let Eric = req.eric.find((x) => x.id === parseInt(req.params.id));
    if (!Eric) res.status(404).send("查無此id");
  
    Eric.name = req.body.name;
    Eric.age = req.body.age;
    res.send(eric);
});
  
router.delete("/remove/:id", (req, res) => {
    //const Eric = eric.find((x) => x.id === parseInt(req.params.id));
    if (!req || !req.eric) {
        return res.status(500).send("array(eric) is not exist");
    }

    const Eric = req.eric.find((x) => x.id === parseInt(req.params.id));
    if (!Eric) {
      res.status(404).send("查無此id");
      return;
    }
  
    //eric.splice(eric.indexOf(Eric), 1);
    //res.send(req.eric);
    req.eric.splice(req.eric.indexOf(Eric), 1);
    res.status(200).send(req.eric);
});

module.exports = router;