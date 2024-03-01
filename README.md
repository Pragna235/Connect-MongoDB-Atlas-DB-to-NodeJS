# Connect-MongoDB-Atlas-DB-to-NodeJS

## Playbook

### How to create Mongodb Atlas account and a Database?

* Create and sign in to your `Atlas` account
* Create a `New Project`
* Name your Project and set the project owner and click on `Create Project`
* Once your project is created, 
* Click on the `Create a database` or `Create a deployment`
* Select the `free` plan, name your `cluster` and click Create
* Note the `Username` and `Password` you get or you can edit them later and create a `User`.
* Click `Finish and Close`.
* And see the `Database Deployments` page to view your deployed databases.

### VSCode Terminal

*     npm init -y
*     npm install express mongoose
* Write your `app.js` code
*     npm install -g nodemon
*     nodemon app
* Go to your atlas now, and `connect` your cluster
* Select the `Drivers`
* Copy your `Connection String` to add to your code
* Paste this string in the `app.js` `connect()`.
* Replace your `user password` there.
* Write your remaining code

* Go to the Atlas, and click on `Browse Collections`
* You should see your create database.
* In case of any error, `Edit your Connection String - delete everything after the word 'majority'`
* And try again.
* You should see the database in Atlas.
* After you write the remaining code and call the `insert()` function, you should see the inserted data in Atlas.
