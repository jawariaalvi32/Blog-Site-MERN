const express = require("express");
const router = express.Router();
const User = require("../../models/users.js");
var bcrypt = require('bcryptjs');
//===========================================Get all users
router.get("/", async (req, res) => {
  try {

    const users = await User.find();
    console.log(users);
    
    res.json({
      status:200,
      success:true,
      data:users
    })
  } catch (e) {
    res.json({
      status:404,
      success:false,
      error:e.message
    })
    // res.status(404).json({ success: false, error: err.message });
  }
});
//=========================================== Create Single User

router.post("/", async (req, res) => {
    let { pwd, email, name } = req.body;
    var salt = bcrypt.genSaltSync(10);
    var hashPwd = bcrypt.hashSync(pwd, salt);
    let newUser = { pwd: hashPwd, email, name }
    
  try{
    User.findOne({email: req.body.email})
      .then(user => {
        console.log(user)

        if(!user) {
          User.create(newUser);
          res.json({
            success: true,
            dbid: user._id,
            status: 201
          });
        }
      })
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }

  // const newUser = new User(usr);
  // try {
  //   await newUser.save();
  //   res.status(201).json(usr);
  // } catch (e) {
  //   res.status(400).json({ message: "error in saving users" });
  // }
});

//===================================================================Get single user
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        data: user
    })

});

// ============================================================ Delete Single user

router.delete('/:id', async (req,res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      status: 200, //ok
      msg: 'user is deleted successfully'
    })

    } catch (error) {
      console.log(error)
    }
})

module.exports = router;
