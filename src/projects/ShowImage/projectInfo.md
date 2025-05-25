# learn & Review how Http request work

http request and response

# HTTP request

    An Http Request is how a client asks a server for something like data, a webpage or to update or delete information.

    Its like ordering at a restaurant
    you(the client) makes a request

    the waiter (the server) responds with what you asked for or an error if there's a problem

# HTTP Method (verb)

| Method   | What It Does                |
| -------- | --------------------------- |
| `GET`    | Get data from the server    |
| `POST`   | Send new data to the server |
| `PUT`    | Update existing data        |
| `DELETE` | Remove data                 |
| `Patch`  | Partially Update the data   |

# URL

this is the address of the resources you are requesting

# Headers

    these send extra information with the request like
    format: Content-Type: application/json
    Auth: Authorization: Bearer token123
    etc.

# Body

    Its only used in some request like post, put and delete.
    this is the acutal data you are sending
    its always in a json format.

# workflow

    format of the request or response
    they all contain URL, Headers and Body

# Learn how to call api in react

# As of now react has no tools, objects or function for making http request.

# React only cares about showing content and handling user events.

# this is kind of good we can write a lot of business logic and data fetching without worrying about react.

appid <!-- 755555 -->
access key <!-- 2yt8DRCL-sH92ffdHJkHeL3YXj1oyt7egiDghc-Jslg -->
secret key <!-- lzzlhoKpKOsFuHwvzTHk-7MjT0SyBKhLp7XJUyu2fZo -->
