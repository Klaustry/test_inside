# API ON NODE+MYSQL for INSIDE

## Getting started

 ### Run application:
    1)sudo docker-compose up -d
    2)sudo docker exec -it app npm run migrate
 
 ### Run test:
    1)sudo docker exec -it app killall node
    2)sudo docker exec -it app npm test
    
 ### All others commands:
    Stop docker containers
    1)sudo docker-compose down -v
    
    Migrate and Seeding datatables
    1)sudo docker exec -it app npm run migrate
    
    Seeding datatables
    1)sudo docker exec -it app npx sequelize-cli db:seed:all
    
    Reset all migrates
    1)sudo docker exec -it app npm run migrate:reset


 ## API requests:
 ### 1)Registartion new user:
        POST http:/{yourhost}:6060/api/auth/signup
        Content-type:JSON
        request data:  {
                    "username":"user2",
                    "password":"12345678"
                }
        response data:
            { "message": "New User created!" }
 ### 2)Authorization user:
        POST http:/{yourhost}:6060/api/auth/signin
        Content-type:JSON
        request data:  {
                    "username":"user2",
                    "password":"12345678"
                }
        response data:
            { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjMzODk0NDgzLCJleHAiOjE2MzM5ODA4ODN9.-A1iByhKsma3N0FLXQF9TWZ2sEeuehl9khRjfnYDgeI" }
            
 ### 3)Add message:
        GET http:/{yourhost}:6060/api/auth/signin
        Content-type:JSON
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjMzODk0NDgzLCJleHAiOjE2MzM5ODA4ODN9.-A1iByhKsma3N0FLXQF9TWZ2sEeuehl9khRjfnYDgeI"
        request data:  {
                        "username": "user2",
                        "message" : "WWWWWW"
                    }
        response data:
            { "message": "Message add successfully!"}
  ### 4)Get the latest messages:
        GET http:/{yourhost}:6060/api/auth/signin
        Content-type:JSON
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjMzODk0NDgzLCJleHAiOjE2MzM5ODA4ODN9.-A1iByhKsma3N0FLXQF9TWZ2sEeuehl9khRjfnYDgeI"
        request data:  {
                        "username": "user2",
                        "message" : "history 6"
                    }
        response data:
                        {
                "username": 10,
                "messages": [
                    "wfASDFQWEFASDAswefsdfasd",
                    "qrqweqwdfadsfqwer",
                    "WWWWWW",
                    "WWWWWW",
                    "WWWWWW",
                    "WWWWWW"
                ]
            }        
            
    
