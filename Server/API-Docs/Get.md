1.ADMIN: Get All users

URL /api/admin/users

METHOD GET

Success Response

Code: 200
data: { users:[array of all the users] }
Required Filed

Auth Need : True
Admin Auth Need : True

2. ADMIN: Get user by Id

URL /api/admin/user/:id

METHOD GET

URL params id

Success Response

Code: 200
data: {user}
Error Response

Code: 404
Message: User not found
Required Filed

Auth Need : True
Admin Auth Need : True