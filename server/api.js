const User = require("../../models/users");

exports.getuserdata = (req, res) => {
    User.findOne({ _id: req.id })
      .then(doc => {
        var payload = {
          name: doc.firstName + " " + doc.lastName,
          storage: doc.storageSpace,
          id: doc._id
        };
        res.status(200).json(payload);
      })
      .catch(err => {
        console.log(err);
      });
  };