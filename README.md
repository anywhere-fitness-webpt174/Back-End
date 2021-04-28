# Back-End
Back-End


# API BASE URL
    - https://protected-gorge-49043.herokuapp.com/api


# BASE ENDPOINTS
    - [GET] "/"
        Message: "These are not the driods you're looking for"

# AUTHENTIFICATION ENDPOINTS
    - [POST] "/auth/register"
        [success] => Returns Client info, and token

            REQUEST
                {
                "user_name": "Alex Pedro",
                "user_username": "alexpe",
                "user_email": "madreo@gmail.com",
                "user_password": "pepevalle"
                }


            RESPONSE
                {
                "data": {
                    "user_id": 8,
                    "user_name": "Alex Pedro",
                    "user_username": "alexpe",
                    "user_email": "madreo@gmail.com",
                    "user_level": "Beginner",
                    "user_subscribed": 0,
                    "role": "Instructor"
                },
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFtZSI6ImFsZXhwZSIsImlhdCI6MTYxOTU4NjI4MSwiZXhwIjoxNjE5NjcyNjgxfQ.eKaOBHgdCt5RztChfcXNbwl9ZITXO_39ORy2C0I5HgQ"
                }


        [error] =>  Returns message with appropriate error


    - [POST] "/auth/login"
        [success] => Returns Welcome message with clients username

            REQUEST
                {
                "user_username": "button",
                "user_password": "stillluvangie"
                }

            
            RESPONSE
                {
                "message": "Welcome back alexpe"
                }

                
        [error] => Returns message with appropriate error


# CLIENT / INSTRUCTOR 
    - [Client]
        [need] client name (string)
        [need] client username (string)
        [need] client email (string)
        [need] password (string)
        [optional] client level (string) (defaults to beginner)
        [optional] subscribed (boolean) (defaults to false)
        [need] role (integer) (1 = Client, 2 = Instructor) (Will default to Client if nothing is selected)


    - [Classes] 
        [need] class name (string)
        [need] class type (string)
        [need] class start (datetime)
        [need] class duration (string)
        [optional] class intensity (string) (defaults to Beginner)
        [need] class description (string, 250 characters)
        [need] class instructor (integer, user_id of instructor)
