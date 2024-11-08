# react_product_store
## Intro
This is my second crud project using the MERN stack (mongodb, express.js framework, react and node.js). 

It's is a product store where the user can create, update, delete an view products

#### Note: The code is commented properly to explain the technical details for all  the code

### Backend
There is a file (server.js) a that holds the configurations for the API. The API will connect the application to the database which will store and amange the application data.

The backend is run with the `npm run dev` command.

### Database
I'm using Mongodb. I created and account and called the project "product_store".

In the .env file, there is URI that connects the API program to the Mongodb database. I then edited the string by putting the passord and the database name. And also allow the database to be accessed from anywhere. the db.js file also handles the connection to the database

In Mongodb, instead of using tables, they use collections (because it is a nosql db). The collections are stored in clusters. The data in collections are organized into documents.

![image](https://github.com/user-attachments/assets/d364bdd3-792a-4822-b7a2-4836e4d62bfb)

The schema is handled in the product.model.js file under the models folder.

### API
The API is handled by the controllers folder. The product.controller.js file contains the crud logic for the API to handle to requests. I used postman to test the API requests.

![image](https://github.com/user-attachments/assets/f45038c9-f558-4a69-a1e4-a707bd42796e)

For the routes, the products.route.js under the routes folder handles the routes using the API logic from the controllers folder.







