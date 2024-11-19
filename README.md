# react_product_store
## Intro
This is my second crud project using the MERN stack (mongodb, express.js framework, react and node.js). 

It's is a product store where the user can create, update, delete an view products

#### Note: The code is commented properly to explain the technical details for all  the code

## Backend
There is a file (server.js) a that holds the configurations for the API. The API will connect the application to the database which will store and amange the application data.

The backend is run with the `npm run dev` command.

## Database
I'm using Mongodb. I created and account and called the project "product_store".

![image](https://github.com/user-attachments/assets/ae754740-51c6-4e0d-8a99-7a7c6ecd6e60)


In the .env file, there is URI that connects the API program to the Mongodb database. I then edited the string by putting the passord and the database name. And also allow the database to be accessed from anywhere. the db.js file also handles the connection to the database.

### Make sure the .env file is in the main folder, not inside the frontend or backend folder

In Mongodb, instead of using tables, they use collections (because it is a nosql db). The collections are stored in clusters. The data in collections are organized into documents.

![image](https://github.com/user-attachments/assets/d364bdd3-792a-4822-b7a2-4836e4d62bfb)

The schema is handled in the product.model.js file under the models folder.

## API
The API is handled by the controllers folder. The product.controller.js file contains the crud logic for the API to handle to requests. I used postman to test the API requests.

![image](https://github.com/user-attachments/assets/f45038c9-f558-4a69-a1e4-a707bd42796e)

For the routes, the products.route.js under the routes folder handles the routes using the API logic from the controllers folder.

## Frontend
I have used chakra ui. It has React UI library that has building blocks that i have used here to bulid the components and the pages.

I have also used react-icons for some icons.

I also used a custom hook for remembering the values when the state changes.

In the store folder, the product.js file has a custom hook for storing global states that we can use in the application and update the data in the db

![image](https://github.com/user-attachments/assets/7b8e2c30-ec8c-426c-898f-2363cfe992cc)

The point here is to have a global state so that instead of putting all the states in the root component, we have a global state "store" where the components can retreive the states whih makes the rendering much quicker.

![image](https://github.com/user-attachments/assets/1ad23b1d-8cd8-4c11-bacd-d2f6c85a8c9a)

I have used a package called zustand to help manage this.

![image](https://github.com/user-attachments/assets/961f9d24-3e22-45ab-af46-0985d8f42160)










