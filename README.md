# Hello Heart Task
implementation of a challenge given by Hello Heart company as a step in the recruitment process.

## Requirements
in this project I am using node.js and the package manager npm,

Please make sure that you have [node](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine before running the project.

 
## Getting Started
First, clone this project to use it on your local machine.
shell
$ git clone "https://github.com/YazanBda/hello-heart-task.git"


Head to the project folder and use the package manager [npm](https://www.npmjs.com/) to install the dependencies used in this project.

shell
$ npm install


## Usage
you must have a folder that contains CSV files provided by the company clients that list their employees ( a sample folder called csvfiles that contains different CSV files is provided in the home root of this repo, you can use it instead)

run index.js with the relative path of the folder that contains the CSV files as an argument to get the data parsed, filtered with the relevant fields, and loaded to a JSON file called clients.json in the home root.

for example, the following command loads the sample CSV files folder
shell
$ node index.js /csvfiles 


to run the local web service that listens to HTTP requests, run the following command 
shell
$ node server.js 

it should prompt a message that the service is running on port 8080.

The service expects to receive a POST request to the path “/check” 
The request payload should contain a JSON of “user fields”. E.g. 
{ “first_name”: “john”,

  “last_name”: “smith”,

  “date_of_birth”: “31/12/1950”,

  “employee_id”: “12345678” }

The service compares the fields it receives in the request to the data stored in clients.json and checks whether this user exists
If it exists, return JSON: {“eligible”: true} 
If it doesn’t exist, return JSON: {“eligible”: false}

## Answers for the bonus part
this issue is already addressed in my implementation,

since the list of "eligible employees" is provided periodically,
the folder of the CSV files is expected to be updated according to the employees' leaves and joins in this period,
for example, if a specific employee left, we expect that it should be removed from its company CSV file in the folder we choose to work with before reaching the updating period!

so while the server is running in the background, all we need to do is to run the command below periodically and it should do all the work(update the clients.json accordingly)
shell
$ node index.js {the relative path of the CSV files folder you choose to work with}