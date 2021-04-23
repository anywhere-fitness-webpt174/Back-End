# Back-End
Back-End


# API BASE URL
    - http://localhost:5000/


# BASE ENDPOINTS
    - [GET] "/"
        Message: "These are not the driods you're looking for"

# AUTHENTIFICATION ENDPOINTS
    - [POST] "/auth/register"
        [success] => Returns Client info, and token
        [error] =>  Returns message with appropriate error

    - [POST] "/auth/login"
        [success] => Returns Welcome message with clients username
        [error] => Returns message with appropriate error
