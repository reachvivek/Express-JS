const User=require('../models/user')


exports.getUsers=(req, res, next)=>{
    User.findAll().then(users=>{
        console.log(users)
        res.status(200).send(users)
    })
}

exports.getUser=(req,res,next)=>{
    User.findByPk(req.params.userID).then(user=>{
        res.status(200).send(user)
    })
}

exports.postUser=(req, res, next)=>{
    console.log(req.body)
    User.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
      }).then(result=>{
        console.log(result)
        res.status(201).send({
            message: "Appointment Successfully Booked!"
        })
      }).catch(err=>console.log(err))
}

exports.deleteUser=(req, res, next)=>{
    console.log(req.params)
    User.findByPk(req.params.userID).then(user=>{
        return user.destroy()
    }).catch(err=>console.log(err)).then(response=>{
        res.status(200).send({
            message: response
        })
    }).catch(err=>console.log(err))
}

exports.editUser=(req, res, next)=>{
    console.log(req.body)
    User.findByPk(req.params.userID).then(user=>{
        user.id=req.params.userID
        user.name=req.body.name
        user.phone=req.body.phone
        user.email=req.body.email
        return user.save()
    }).then(response=>{
        res.status(200).send({
            message: response
        })
    }).catch(err=>console.log(err))
}
