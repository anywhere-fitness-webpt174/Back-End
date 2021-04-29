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


    - [DELETE] "/auth/signout"
        [success] => Returns "Logged out successfully"

        [error] => Returns "Error logging out"


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

# USER ENDPOINTS
    -[GET] "/users"
        [success] => Returns an array of all users

        REQUEST
            https://protected-gorge-49043.herokuapp.com/api/users/


        RESPONSE
            [
                {
                    "user_id": 1,
                    "user_name": "Marcus Lee",
                    "user_username": "TheBest",
                    "user_email": "marcuslee@gmail.com",
                    "user_level": "Intermediate",
                    "user_subscribed": 0,
                    "role": "Client"
                },
                {
                    "user_id": 2,
                    "user_name": "Jack Black",
                    "user_username": "Singer",
                    "user_email": "tenD@gmail.com",
                    "user_level": "Profesional",
                    "user_subscribed": 1,
                    "role": "Client"
                },
                {
                    "user_id": 3,
                    "user_name": "Brad Pitt",
                    "user_username": "button",
                    "user_email": "brad@aol.com",
                    "user_level": "Profesional",
                    "user_subscribed": 1,
                    "role": "Instructor"
                },
                ect....
            ]

    -[GET] "/users/:id"
        [success] => Returns Information on one specific user

        REQUEST
            https://protected-gorge-49043.herokuapp.com/api/users/1

        RESPONSE
            {
            "user": {
                "user_id": 1,
                "user_name": "Marcus Lee",
                "user_username": "TheBest",
                "user_email": "marcuslee@gmail.com",
                "user_level": "Intermediate",
                "user_subscribed": 0,
                "role": "Client"
            }
            }


        [error] => Returns message with appropriate error

            
    -[DELETE] "/users/:id"
        [success] => Returns "User has been deleted"

        [error] => Returns "Error deleting profile"


# CLASSES ENDPOINTS
    -[GET] "/classes"
        [success] => Returns an array of classes

        REQUEST
        https://protected-gorge-49043.herokuapp.com/api/classes

        RESPONSE
        [
            {
                "class_id": 1,
                "class_name": "Pro Pilates",
                "class_type": "Pilates",
                "class_start": "2021-08-24 14-30-00",
                "class_duration": "1 hour",
                "class_intensity": "Profesional",
                "class_description": "High-Intensity Pilates, for those who are expirienced. Get ready to feel the burn!!!",
                "class_instructor": "Jack Black"
            },
            {
                "class_id": 2,
                "class_name": "Hot Yoga",
                "class_type": "Yoga",
                "class_start": "2021-08-25 14-30-00",
                "class_duration": "1 hour 30 minutes",
                "class_intensity": "Intermediate",
                "class_description": "Hot Yoga! We are going to be going over the new age Yoga, mixed with some old classics!",
                "class_instructor": "Jack Black"
            },
            {
                "class_id": 3,
                "class_name": "Insanity",
                "class_type": "All of it",
                "class_start": "2021-08-26 14-30-00",
                "class_duration": "2 hours",
                "class_intensity": "Profesional",
                "class_description": "Insanity!!! I have no idea what we are going to do!! Maybe a mile run? Weight training? Zumba?? Your guess is as good as mine!",
                "class_instructor": "Jack Black"
            }
        ]

        [error] => Returns appropriate error message

    -[GET] "/classess/:id"
        [success] => Returns information on specific class
        
        REQUEST
        https://protected-gorge-49043.herokuapp.com/api/classes

        RESPONSE
        {
            "classes": {
                "class_id": 1,
                "class_name": "Pro Pilates",
                "class_type": "Pilates",
                "class_start": "2021-08-24 14-30-00",
                "class_duration": "1 hour",
                "class_intensity": "Profesional",
                "class_description": "High-Intensity Pilates, for those who are expirienced. Get ready to feel the burn!!!",
                "class_instructor": "Jack Black"
            }
        }

        [error] => Returns appropriate error message