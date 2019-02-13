# Intro
Practise project for integration of backhand with spring.boot and hibernate2, Fronthand of @angular.

# Guidances

Running on `http://localhost:8080`    
Console to check datasource (JDBC URL: jdbc:h2:mem:tasks)
`http://localhost:8080/h2-console`

### Run angular by using proxy
Add *`proxy-conf.json`* root of angular project
````$json
{
    "/api": {
      "target": "http://localhost:8080",
      "secure": false
    }
  }
````
update `package.json`
````$json
  "scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy-conf.json",
````
### Building Package
update *package.json* , command `npm run build`
```$json
    "scripts":{
        "build": "ng build",
        /* postbuild:run after we build */
        "postbuild": "npm run deploy",
        /* predeploy:look at a directory and make a directory $ npm install --save-dev rimraf mkdirp */
        "predeploy": "rimraf ../resources/static/ && mkdirp ../resources/static",
        /* deploy copy the files and deploy to spring boot resources/static folder */
        "deploy": "copyfiles -f dist/** ../resources/static",

```