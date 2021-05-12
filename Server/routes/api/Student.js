const express = require('express')
const router = express.Router()
const { check,validationResult } = require('express-validator')
const User = require('../../models/Student')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Enter a valid Email').isEmail(),
    check('contact','Contact is required').not().isEmpty(),
    check('branch','Branch is required').not().isEmpty(),
    check('year','Year is required').not().isEmpty(),
    check('degree','Degree is required').not().isEmpty(),
    check('institutionName','Institution Name is required').not().isEmpty(),
    check('password','Enter password with 6 or more characters').isLength({ min : 6 })
], async (req,res)=> 
{
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    
    const { name, email, password, contact, branch, year, degree, institutionName} = req.body

    try
    {
        let user=await User.findOne({ email })

        if(user)
        {
            return res.status(400).json({ errors: [{msg : 'User Already exists' }] })
        }

        user = new User({
            name,
            email,
            password, 
            contact, 
            branch, 
            year, 
            degree, 
            institutionName
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password,salt)
        await user.save()
        
        const payload = {
            user :
            {
                id: user.id
            }
        }

        jwt.sign(payload,config.get('jwtSecret'),
        {expiresIn : 3600},
        (err,token)=>{
            if (err) throw err
            res.json({ token })
        })
    } 
    catch(err)
    {
        console.error(err.message)
        res.status(500).send('Server Error')
    }    
})

module.exports = router