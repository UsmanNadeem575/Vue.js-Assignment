# API Blueprint for Activities

## Base URL 
`http://localhost:8000/api`


## 1. Add Activity

**POST /activities**  
Add a new activity to the list.

### Request
 **Method**: `POST`  
 **Endpoint**: `/activities`  
 **URL**: `http://localhost:8000/api/activities`  

#### Request Body:
```json
{
  "activity": "New Activity...",
  "completed": false
}
```
### Response
   **Status Code**: `200 OK`


-----------------------------------


## 2. Delete Activity

**DELETE /activities/{id}**  
Delete a specific activity by its ID.

### Request
 **Method**: `DELETE`  
 **Endpoint**: `/activities/{id}`  
 **URL**: `http://localhost:8000/api/activities/{id}`  
 **Parameters**: `id` Unique identifier of the activity to delete.

### Response
   **Status Code**: `200 OK`

#### Response Body:
```json
{
  "message": "Activity deleted successfully"
}
```


----------------------------------------------------


## 3. Update Activity

**PUT /activities/{id}**  
Update the details of a specific activity by its ID.

### Request
 **Method**: `PUT`
 **Endpoint**: `/activities/{id}`
 **URL**: `http://localhost:8000/api/activities/{id}`
 **Parameters**: `id` (required) - Unique identifier of the activity to update.

#### Request Body:
```json
{
  "activity": "Updated Activity Name",
}
```

### Response
   **Status Code**: `200 OK`

#### Response Body:
```json
{
  "id": 1,
  "activity": "Updated Activity Name",
  "completed": false
}
```


-------------------------------------------------


## 4. Get All Activities

**GET /activities**  
Retrieve a list of all activities.

### Request
   **Method**: `GET`
   **Endpoint**: `/activities`
   **URL**: `http://localhost:8000/api/activities`

### Response
   **Status Code**: `200 OK`

#### Response Body:
```json
[
  {
    "id": 1,
    "activity": "Cricket",
    "completed": false
  },
  {
    "id": 2,
    "activity": "Playing with Computer",
    "completed": false
  }
]
```


---------------------------------------------------


## 5. Toggle Complete Activity

**PUT /activities/{id}/complete**  
Mark a specific activity as completed or incomplete by its ID.

### Request
 **Method**: `PUT`  
 **Endpoint**: `/activities/{id}/complete`  
 **URL**: `http://localhost:8000/api/activities/{id}/complete`  
 **Parameters**: 
   - `id` Unique identifier of the activity to update.

#### Request Body:
```json
{
  "completed": true
}
```

### Response
   **Status Code**: `200 OK`

#### Response Body:
```json
{
  "id": 1,
  "activity": "Activity Completed ....",
  "completed": true
}
```