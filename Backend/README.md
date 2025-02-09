# User Registration Endpoint

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user. It validates the input data, checks if the user already exists, hashes the password, creates a new user, and returns an authentication token along with the user details.

### Method
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string that must be a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}

Response
Success (201 Created)
Status Code: 201
Body: A JSON object containing the authentication token and user details.
Example:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}


Validation Errors (400 Bad Request)
Status Code: 400
Body: A JSON object containing an array of validation errors.
Example:
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}


ser Already Exists (400 Bad Request)
Status Code: 400
Body: A JSON object with a message indicating that the user already exists.
Example:
{
  "message": "User already exist"
}


# Data Handling
The endpoint uses express-validator to validate the input data.
If the data is valid, it checks if the user already exists in the database using the userModel.findOne method.
If the user does not exist, it hashes the password using the userModel.hashPassword method.
It then creates a new user using the userService.createUser method.
Finally, it generates an authentication token using the user.generateAuthToken method and returns the token along with the user details.
File Paths
Controller: user.controller.js
Service: user.service.js
Model: user.model.js
Routes: user.routes.js
