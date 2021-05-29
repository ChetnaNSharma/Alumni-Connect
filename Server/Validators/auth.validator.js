const {oneOf, check, validationResult } = require("express-validator");

const validateSignupRequest = [
    check('name','Name is required').not().isEmpty(),
    check('email','Enter a valid Email').isEmail(),
    check('contact','Contact is required').not().isEmpty(),
    check('branch','Branch is required').not().isEmpty(),
    check('year','Year is required').not().isEmpty(),
    check('degree','Degree is required').not().isEmpty(),
    check('institutionName','Institution Name is required').not().isEmpty(),
    check('password','Enter password with 6 or more characters').isLength({ min : 6 })
];

const validateSigninRequest = [
    check('name','Name is required').not().isEmpty(),
    check('email','Enter a valid Email').isEmail(),
    check('contact','Contact is required').not().isEmpty(),
    check('branch','Branch is required').not().isEmpty(),
    check('year','Year is required').not().isEmpty(),
    check('degree','Degree is required').not().isEmpty(),
    check('institutionName','Institution Name is required').not().isEmpty(),
    check('password','Enter password with 6 or more characters').isLength({ min : 6 })
];

const validateUpdateRequest = [ //performs a conditional validation depending on whether a not that field was mentioned
    oneOf([
        [
            check('name','Name is required').not().isEmpty(),
        ],
        [
            check('email','Enter a valid Email').isEmail(),
        ],
        [
            check('contact','Contact is required').not().isEmpty(),
        ],
        [
            check('branch','Branch is required').not().isEmpty(),
        ],
        [
            check('year','Year is required').not().isEmpty(),
        ],
        [
            check('degree','Degree is required').not().isEmpty(),

        ],
        [
            check('institutionName','Institution Name is required').not().isEmpty(),
        ],
        [
            check('password','Enter password with 6 or more characters').isLength({ min : 6 })
        ]
    
    ])
]

const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg})
    }
    next();
}

module.exports = authValidator = {
    validateSignupRequest,
    validateSigninRequest,
    validateUpdateRequest,
    isRequestValidated
};