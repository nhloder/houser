module.exports = {
  getAll(req, res) {
    const db = req.app.get("db");
    db.get_all()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  add(req, res) {
    const db = req.app.get("db");
    const { name, address, city, state, zipcode, img, mortgage, rent } = req.body;
    db.add({
      name: name,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      img: img,
      mortgage:mortgage,
      rent:rent
    })
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  delete(req,res){
    const db = req.app.get('db')
        db.delete(req.params.id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err)
        })
  }
};
