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

**use javascript fetch method to fetch data**

### custom text for required validation

created custom warning text for required validation but it will display in the initial page reload. 

```
{name.length === 0 && <span className="text-danger">Enter name</span>}
```
to avoid that created a state variable and utilized onMouseDown event 
onMouseDown event is employed on the "Name" input and triggers the display of the warning message when the user interacts with the input
                                        
```jsx
<input
   value={name}
   required
   onMouseDown={(e) => setWarningmsg(true)}
   onChange={(e) => setName(e.target.value)}
   className="form-control"
/>
```
https://www.youtube.com/watch?v=i3J8gyARN-Y
