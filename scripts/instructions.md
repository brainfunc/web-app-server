# Deploying Instructions
Deploying instructions for deploying to heroku.

**NOTE:-** Run all commands from inside the root of the app

## Initial Deployment
```bash
bash scripts/create.bash <app-name> &&
```
Then add mLab addon from heroku dashboard to app with app-name.herokuapp.com

For example
```bash
bash scripts/create.bash askanexpert-server &&
```

## Subsequent Deploys
```bash
git push heroku
```

# Testing Instructions
Test the deployed build via Postman

## Testing Lead Creation

**POST to**  https://<app-name>.herokuapp.com/leads

##### Request Header
```javascript
  {
    "Content-Type": "application/json"
  }
```

##### Request Body
```javascript
  {
    "email": "test_email@sample.com"
  }
```

##### Success Response Body
```javascript
{
  "message": "success",
  "lead": {
      "_id": "5b20f56dea522c0014f9ca20",
      "email": "tejasadimbh@gmail.com",
      "__v": 0
  }
}
```
# Author
- Tejas Nikumbh
  - Email: tejnikumbh@gmail.com
  - Skype: tjnikumbh
