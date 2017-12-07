# node-mongodb-todo-api
Use postman to try API

Users:
  Sign in: POST https://fathomless-headland-87461.herokuapp.com/users
  Log in: POST https://fathomless-headland-87461.herokuapp.com/users/login
  Log out: DELETE https://fathomless-headland-87461.herokuapp.com/users/me/token
            Send headers: x-auth: token
  Get me: GET https://fathomless-headland-87461.herokuapp.com/users/me
            Send headers: x-auth: token
Todos:
            Send headers: x-auth: token
  Get todos: GET https://fathomless-headland-87461.herokuapp.com/todos
  Create todo: POST https://fathomless-headland-87461.herokuapp.com/todos
  Get todo: GET https://fathomless-headland-87461.herokuapp.com/todos/:id
  Delete todo: DELETE https://fathomless-headland-87461.herokuapp.com/todos/:id
  Update todo: PATCH https://fathomless-headland-87461.herokuapp.com/todos/:id
