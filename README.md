This is simple crud operation work

Follow these steps to run the app on your local machine,

Assume you have node & mysql installed

    1. Run this query to create a database and table

        "CREATE DATABASE IF NOT EXISTS `crud_app` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
        USE `crud_app`;

        CREATE TABLE IF NOT EXISTS `employees` (
        `id` int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `fname` varchar(255) NOT NULL,
        `lname` varchar(255) NOT NULL,
        `email` varchar(100) NOT NULL,
        `date_of_birth` varchar(100) NOT NULL,
        `mobile` int(10) NOT NULL,
            `hometown` varchar(50) NOT NULL
        ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;"


    2. Run "npm install" from the crud-app directory & Run "npm install" from the crud-server directory.

    3. Create .env file and insert following data properly
            PORT=4000
            DB_HOST=localhost
            DB_USER=root
            DB_PWD=
            DB_DATABASE=crud_app


    3. To run the front-end and back-end
        ->  "npm start" on crud-server directory
        ->  "npm start" on crud-app directory
