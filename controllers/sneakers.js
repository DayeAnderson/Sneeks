const Sneaker = require('../models/sneaker')

module.exports = {
    create,

}

function create(req, res) {
    req.body.addedBy = req.user._id;
    Sneaker.create(req.body)
    .then(sneaker => {res.json(sneaker)})
    .catch(err => {res.json(err)})
}