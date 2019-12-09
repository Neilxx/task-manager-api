# API for USER
| Method  | Url | Parameters |
|-|-|-|
| GET  | /users/me |
| POST | /users | { *name(string), *email(string), *password(string), age(number)}|
| POST | /users/login | { *email(string), *password(string)} |
| POST | /users/logout |
| PATCH | /users/me | { name(string), email(string), password(string), age(number)}|
| DELETE | /users/me |
