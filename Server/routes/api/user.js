const router = require('express').Router();
const userController = require('../../controller/user.controller');

router.route('/').get(userController.fetchAllUsers);
router.route('/:email').get(userController.fetchUserByEmail);
router.route('/add').post(userController.addNewUser);
router.route('/update/:id').post(userController.updateUser);
router.route('/delete/:id').delete(userController.deleteUser);
router.route('/sendMail/:email/:c').get(userController.sendEmail);
router.put("/followUser/:user_id", requireSignin, userMiddleWare, userController.followUser );

router.put("/followUser/:user_id", requireSignin, userMiddleWare, userController.unfollowUser );

module.exports = router;
