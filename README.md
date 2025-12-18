# Backend Assignment 1
This repository demonstrates Node.js Express server with CRUD API and JSON storage.

## Setup
- Run `npm install` to install all dependencies
- Run `npm start` to start the server
- Server will be running at http://localhost:81

Navigate to http://localhost:81/front for frontend page

## Objects description
Topic is contacts, each object contains 4 properties:
- First Name (string)
- Last Name (string)
- Email (string)
- Entry ID (uuid string)

## Demo routes
### GET `/`
Returns "Server is running" text

### GET `/hello`
Returns JSON object with `Hello from server` message

### GET `/time`
Returns server time

### GET `/status`
Returns server status in JSON

## CRUD routes

### GET `/objects`
Returns all objects

Response example:
```json
{
    "objects": [
        {
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "id": "uuid"
        }
    ]
}
```

### GET `/objects/:id`
Returns specific object

Response example:
```json
{
    "success": true,
    "object": {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "id": "uuid"
    }
}
```

### POST `/objects/:id`
Adds object

Request example:
```json
{
    "firstName": "string",
    "lastName": "string",
    "email": "string"
}
```

Response example:
```json
{
    "success": true,
    "object": {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "id": "id"
    }
}
```

### PUT `/objects/:id`
Edits object with specific id

Request example:
```json
{
    "firstName": "string",
    "lastName": "string",
    "email": "string"
}
```

Each property is optional.

Response example:
```json
{
    "success": true,
    "object": {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "id": "id"
    }
}
```

### DELETE `/objects/:id`
Removes object with specific id

Response example:
```json
{
    "success": true,
    "object": {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "id": "id"
    }
}
```

## HTML routes

### GET `/front`
Shows HTML front page
