# API for USER
| Method  | Url | Parameters |
|-|-|-|
| POST | /users/login | { *email(string), *password(string)} |
| GET  | /users/me |
| POST | /users | { *name(string), *email(string), *password(string), age(number) }|
| POST | /users/logout |
| PATCH | /users/me | { name(string), email(string), password(string), age(number) }|
| DELETE | /users/me |
# API for TASK
| Method  | Url | Parameters |
|-|-|-|
| GET  | /tasks |
| GET | /tasks/:id|
| POST | /tasks |
| PATCH | /tasks/:id | { description(string), completed(boolean) }|
| DELETE | /tasks/:id |

> Start with `/users/login` end-point to get the authenticate token as cookie.
