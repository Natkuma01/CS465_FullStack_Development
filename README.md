# CS465 Travlr Getaways - MEAN Stack
<br>

<img width="500" height="400" alt="Screenshot 2026-04-19 at 6 15 25 PM" src="https://github.com/user-attachments/assets/6d7980d0-904f-4a69-ab66-95553996585f" />
<br>
<img width="500" height="400" alt="Screenshot 2026-04-19 at 6 20 22 PM" src="https://github.com/user-attachments/assets/2f1c5821-9c94-4881-9d64-05e15c6b635a" />
<br>


## 🏛️ Architecture
In this project, the frontend is split into two distinct architectures to serve different functional needs. The customer-facing side uses Express and HTML, where the server processes the logic and sends a fully formed webpage to the browser. This ensures that the content is immediately available for search engines to load quickly for first-time visitors. In contrast, the admin portal is built as a Single Page Application (SPA) using JavaScript. In this model, the browser loads the application once, and then dynamically updates the content on the screen by fetching data from the server in the background. This creates a responsive interface for administrators who need to perform frequent updates without full-page reloads.
We chose to use MongoDB instead of relational databases because relational databases can be restrictive when the data for a travel package changes or becomes more complex over time. MongoDB is a document-oriented database that does not require a schema and stores data in a format called BSON, which is nearly identical to the JSON objects used in JavaScript. Since the entire stack operates using JavaScript, data can flow seamlessly from the database to the frontend without needing complex translations or "joins" between multiple tables. This greatly speeds up the development process and allows the database to store varied information in a single, unified document.


## 🔧 Functionality
JavaScript is the programming language that makes the website functional. It contains the logic that allows users to interact with the page, such as clicking buttons or submitting forms. JSON is a text-based format used to store and move data. In the project, JSON connects the frontend and backend by acting as a standard format that both sides can read. When the frontend needs trip information, the backend sends that data as a JSON string. The frontend then turns that string into an object it can use to display information on the screen. This prevents the need for complex data conversion between the server and the browser.


Using reusable user interface (UI) components is a key factor for efficiency in the admin portal. Instead of writing the HTML and CSS for a "Trip Card" every time to display a new trip, create one component and reuse it. The main benefit is consistency, as every instance of that component will look and behave exactly the same. It also makes maintenance much simpler. 

## **🧪 Testing**
Security in this project involves both authentication and authorization, primarily managed through JSON Web Tokens (JWT). Authentication is the process of the server verifying a user's identity when they log in. Once verified, the server provides a JWT, which acts as a digital credential that the browser must include in the header of every future request. Authorization, or access role control, is the set of rules that decides what a logged-in user is allowed to do. For example, while any user might be able to view trips, only a user with an admin role is authorized to use the POST or DELETE methods to change the trip database.
To test a secured endpoint, I used Postman. First, I created an account, then I performed a separate login request to receive a token, then copy that token into the settings of the next request. If the token is missing, expired, or belongs to a user without the correct permissions, the server will block the request. This means that when a test fails, I have to determine if the problem is a bug in the code itself or simply an issue with the security credentials being used during the test.


## 🪬 **Reflection**
Overall I think this course has advanced my professional goals by providing a practical understanding of how all the pieces of a modern web application fit together. One of the most valuable skills I developed was the ability to effectively debug complex issues across the entire stack. By working through the integration of the frontend and backend, I gained a much deeper understanding of the Model-View-Controller (MVC) architecture. Learning how these three layers interact allowed me to write more organized code and better understand how data flows from the database to the user’s screen. 
In addition to architecture, I gained hands-on experience setting up secure API endpoints and testing them thoroughly using Postman to ensure reliability. I developed a strong foundation in application security by implementing authentication and authorization through JSON Web Tokens (JWT). Understanding how to protect data and restrict access based on user roles is a critical requirement in professional development, and having these skills allows me to build applications that are not only functional but also secure and production-ready.


## 💾 **Prerequisites**
* Node.js `(v14 or higher)` 
* npm `(Node Package Manager)`
* MongoDB Community Server `(running locally on port 27017)`
* Angular CLI `(install via npm install -g @angular/cli)`


**Run Command - Backend Configuration - Express:**
* `npm install`
*` npm start`

**Run Command - Frontend - Angular Admin:**
* `npm install`
* `ng serve`
