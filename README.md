# ReactNotifications

Steps to run backend
1. start mongodb server
2. go to backend application - cd backend
3. npm install
4. nodemon server
5. store notification in the backend using postman, please follow the below format for post body and hit the 
URL - 'http://localhost:4000/api/create' (POST)
[
	{
      "title":"James posted for the first time in a while",
      "date": "2020-04-23T18:25:43.511Z",
      "read": false
    },
    {
       "title":"Matt liked your picture",
       "date": "2020-04-23T18:25:43.511Z",
       "read": false
    },
    {
      "title":"James posted for the first time in a while",
      "date": "2020-04-23T18:25:43.511Z",
      "read": false
    }
]

Steps to run frontend
1. cd notifications
2. npm install
3. npm start

Run both backend and frontend paralelly