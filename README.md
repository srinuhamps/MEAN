# MEAN
Application to test and develop MongoDB, Express, Angular and Node


This excercise application is build with Node, Express and used typescript for minimizing compilation issues. Database used: MongoDB.

By adding "tsc": "tsc" inside scripts we can run the following command, which will generate a default tsconfig.json file.

npm run tsc -- --init : creates the tsconfig.json in the current directory, so that we can configure our build outDir path ("outDir": "./build",).

Install MongoDB community version with default settings -> open mongoDB compass -> click connect -> check the dataschema we created is existing in db.

run this command to start the project : nodemon .\build\bin\www.js

runt this command to keep tsc compilation checker running : npm run tsc -- --watch
