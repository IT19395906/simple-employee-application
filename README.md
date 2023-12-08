# employee-app

create, read, update, delete

React.js web

_dependencies_

```bash
npm install react-router-dom
npm install bootstrap
npm install json-server
```
**import bootstrap/dist/css/bootstrap.min.css** in index.js
- first create db.json file outside src folder  (this single file act as database)
- add user data into json file
- it is a lightweight and easy-to-use Node.js tool that simulates a RESTful API using a JSON file as the data source. With JSON Server, front-end developers can create mock APIs without the need to write complex server-side code
- This mock API sends requests to an endpoint that will be provided. It responds to HTTP requests, and this makes it ideal for rapid development for front-end developers. JSON Server also enables developers to perform operations and saves data in JSON files. 

**run json-server**
```bash
npx json-server --watch db.json
```
**just ``` json-server --watch db.json``` won't work  because you have installed it locally you have to use npx** 

**or you can install globally typing ```npm install -g json-server```** 
after that can run ```json-server --watch db.json```
