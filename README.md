# Cray News Network (CNN)
## Author: Abayomi Ogunnusi
### Backend logic only

**FEATURES**
* Chief editor can:
    *Create News
    *Fetch News
    *Update News
    *Delete News
    *Search News

* login route
    * check if user exists
    * compare user's password with stored has
    * create a token
    * send token to user
    * authenticate book route (GET)
    * role -based authentication
    * Seeding

[Published documentation of CNN collections from postman](https://documenter.getpostman.com/view/15544476/TzeRqAMB)

> **Tools Used**
>Node js,
>Mongodb Database,
>ExpressJs framework
>Architecture: Model - View - Controller
>Seeders
>Environmental Variable setup

```bash 
  npm install my-project
  cd my-project
```

## Feedback

If you have any feedback, please reach out to us at abayomiogunnusi@gmail.com

## Usage/importing

```importing 3rd party packages
const mongoose = require('mongoose');
```

## Lessons Learned

- [x] Code refactoring
- [x] Seeding

## API Reference

#### Get all news /api/news

```http
  GET /api/news
```
#### Get news by id /api/news/:id

```http
  GET /api/news/:id
```

#### sign up route /auth/signup

```http
  POST /auth/signup
```

#### login route /auth/login

```http
  POST /auth/login
```

#### delete news by id /api/news/:id'

```http
  DELETE /api/news/:id'
```

#### update news by id /api/news/:id

```http
  UPDATE /api/news/:id
```