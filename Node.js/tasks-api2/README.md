# User Management API (Express + bcrypt + JSON File)

## Setup

```bash
npm install
npm start
```

Server runs on `http://localhost:3000`.

## HTML forms

- Register form: `http://localhost:3000/register.html`
- Login form: `http://localhost:3000/login.html`

Both forms disable submit buttons until all required inputs are filled.

## Endpoints

- `POST /register`
- `POST /login`
- `GET /users`
- `GET /users/:id`
- `PUT /users/:id`

Data is stored in `data/users.json` (initialized as `[]`).

## curl tests

### Register

```bash
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","lastName":"Doe","email":"john@gmail.com","username":"johnny","password":"123456"}'
```

### Duplicate register

```bash
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","lastName":"Doe","email":"john2@gmail.com","username":"johnny","password":"abcdef"}'
```

### Login

```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"johnny","password":"123456"}'
```

### Login not registered

```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"johnny2","password":"123456"}'
```

### Get all users

```bash
curl http://localhost:3000/users
```

### Get user by id

```bash
curl http://localhost:3000/users/1
```

### Update user by id

```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"lastName":"Smith","password":"new-password-123"}'
```
