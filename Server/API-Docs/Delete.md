DELETE API DOCS

1. DELETE profile

URL /api/deleteProfile

METHOD DELETE

URL params none

Success Response

Code: 200
Message: profile deleted
Error Response

Code: 400
Message: Something went wrong
Required Filed

Auth Need : True
Admin Auth Need : False

2. ADMIN: DELETE user

URL /api/admin/user/:id

METHOD DELETE

URL params id

Success Response

Code: 200
Message: User removed
Error Response

Code: 404
Message: User not found
Required Filed

Auth Need : True
Admin Auth Need : True