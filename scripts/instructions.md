# Deploying Instructions
Deploying instructions for deploying to heroku

## Initial Deployment
```bash
bash create.bash <app-name> &&
bash deploy.bash <app-name>
```
Then add mLab addon from heroku dashboard to app with app-name.herokuapp.com

For example
```bash
bash create.bash askanexpert-server &&
bash deploy.bash askanexpert-server
```

## Subsequent Deploys
```bash
bash deploy.bash <app-name>
```

For example
```bash
bash deploy.bash askanexpert-server
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
