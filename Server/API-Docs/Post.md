1. Signup for the user

URL /api/signup

METHOD POST

PASSED OBJETCS
name [required],
email [required],
password [required],
contact [required],
branch [required],
year [required],
degree [required],
instituteName [required]

Success Response


Code: 201
Message: User Created Succesfully...!
data: { token: "token generetaed" }
Error Response

Code: 400
Message: User is already registered
Required Filed

Auth Need : False
Admin Auth Need : False

2. Signin for the user

URL /api/signin

METHOD POST

PASSED OBJETCS
email [required],
password [required]

Success Response

Code: 200
Message: User Logged in
data: { token: "token generetaed", user: "user_info" }
Error Response

Code: 401
Message: Invalid password or valid email is required
Required Filed

Auth Need : False
Admin Auth Need : False