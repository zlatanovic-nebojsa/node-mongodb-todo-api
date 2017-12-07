# node-mongodb-todo-api
<p>Use postman to try API</p>
<br><br>
URL: https://fathomless-headland-87461.herokuapp.com
<br><br>
<p><h3>Users:</h3><p>
  <blockquote>
  <p>Sign in: POST /users</p>
  <p>Log in: POST /users/login</p>
  </blockquote>
  <br>
  <blockquote>
  <p>Send headers: x-auth: token</p>
  <p>Log out: DELETE /users/me/token</p>
  <p>Get me: GET /users/me</p>
  </blockquote>
<br>
<p><h3>Todos:</h3></p>
  <blockquote>
  <p>Send headers: x-auth: token</p>
  <p>Get todos: GET /todos</p>
  <p>Create todo: POST /todos</p>
  <p>Get todo: GET /todos/:id</p>
  <p>Delete todo: DELETE /todos/:id</p>
  <p>Update todo: PATCH /todos/:id</p>
  </blockquote>
