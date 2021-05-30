1.ADIMN: Update User Profile

URL /apiadmin/user/:id

METHOD PUT

PASSED OBJETCS

required atleast one field to update

name
email,
isAdmin,

Success Response

Code: 201
Message: Profile updated
data: { id: "user_id", firstName, lastName, email, isAdmin }
Error Response

Code: 40$
Message: User Not Found
Required Filed

Auth Need : True
Admin Auth Need : True

2.Student: Follow Other Student

URL /api/user/:id

METHOD PUT

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
Message: Started following
data: { token: "token genereted" }
Error Response

Code: 40$
Message: Already following
Required Filed

Auth Need : True
Admin Auth Need : False

3.Student: Unfollow Other Student

URL /api/user/:id

METHOD PUT

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
Message: Unfollow done
data: { token: "token genereted" }
Error Response

Code: 40$
Message: You need to follow first
Required Filed

Auth Need : True
Admin Auth Need : False