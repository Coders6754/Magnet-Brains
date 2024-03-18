# Task Management

## Overview
The Task Management System is a web application designed to help users efficiently manage their tasks. It offers functionalities such as task creation, listing, editing, and deletion, along with user authentication to ensure data privacy and security. This document provides a detailed overview of the project, including its structure, functionalities, design decisions, and rationale.


## Feature
- **Secure user authentication and authorization**
- **User-Friendly Interface**
- **Responsive Design**
- **Task Creation**
- **Task Drag and Drop**
- **Task Categories**
- **Technologies Used**
- **Typescript**
- **React**
- **Redux**
- **Node JS**
- **Express JS**
- **Mongo DB**
- **Material UI**
- **Tailwind CSS**

## Deployment
The project is deployed and accessible at https://magnet-brains.vercel.app/


## Deployed Link
The project is deployed link -  https://magnet-brains-cwtx.vercel.app/board


## Project Structure

- **Frontend:** Developed using a modern JavaScript framework/library (e.g., React, Angular, or Vue) to provide a dynamic and responsive user interface.
- **Backend:** Implemented using Node.js with Express for RESTful API services that interact with a database for task management operations.
- **Database:** Utilized a relational database (e.g., PostgreSQL) or a NoSQL database (e.g., MongoDB) depending on the complexity of data relationships and performance considerations.
- **Authentication:** Integrated with Passport.js or a similar library for handling user authentication and session management.
  <hr/>
  
## Detailed Features and Functionality

## 1.Task Creation:

  - **Form:**  A simple yet comprehensive form that collects a task's title, description, and due date.
  - **Decision:** The decision to include these specific fields was based on the minimum information required to create a meaningful task. The form design focuses on usability and efficiency.

## 2. Task Details:

  - **Page:** A dedicated page for viewing all details of a specific task.
  - **Decision:** Providing a detailed view allows users to focus on one task at a time, making it easier to understand and manage the task's requirements.
    
## 3.Task Editing:

  - **Functionality:** Users can edit the details of an existing task. This includes updating the title, description, and due date.
  - **Decision:** The ability to edit tasks ensures flexibility and adaptability, allowing users to update task information as priorities and deadlines change.

## 4.Task Deletion:
  - **Confirmation Dialogue:** Before deletion, a confirmation dialogue ensures that users do not accidentally delete tasks.
  - **Decision:** Implementing a confirmation dialogue prevents unintentional data loss, enhancing the application's usability and user trust.

    
## 5.Task Status Update:
  - **Status Options:** Users can mark tasks as completed or change their status (e.g., "pending," "in progress").
  - **Decision:** Allowing users to update task status helps track progress and prioritize tasks effectively.

## 6.User Authentication:
  - **System:** A basic user authentication system that includes registration, login, and session management.
  - **Decision:**  Implementing user authentication ensures that tasks are private and secure, accessible only to authorized users.
<hr/>

## Design Decisions and Rationale
- **Technology Stack:** The choice of technologies for the frontend, backend, and database was based on factors such as scalability, development efficiency, and community support.
- **Responsive Design:**  The frontend is designed to be responsive, ensuring that the application is accessible on various devices and screen sizes.
- **API Design:** The backend API follows RESTful principles, providing a clear and consistent interface for performing task management operations.
- **Security:** Passwords are hashed before storage, and access control measures are in place to prevent unauthorized access to task management functionalities.
<hr/>
  
## Challenges, Solutions, and Future Improvements
- **Challenge:** Ensuring data consistency and integrity during concurrent task modifications.
  - **Solution:** Implemented optimistic locking at the database level.
  - **Future Improvement:** Explore real-time data synchronization techniques for a more dynamic user experience.

- **Challenge:**  Managing complex user interactions in the frontend.
  - **Solution:** Utilized state management libraries (e.g., Redux, Vuex) to manage application state efficiently.
  - **Future Improvement:** Investigate newer state management patterns and libraries for simplifying state management further.

- **Challenge:** Enhancing application security against web vulnerabilities.
  - **Solution:** Incorporated security best practices, including input validation, output encoding, and secure headers.
  - **Future Improvement:** Regular security audits and updates to keep up with emerging security threats and best practices.

## Conclusion
The Task Management System is designed to provide users with a comprehensive solution for managing their tasks efficiently. Through thoughtful design decisions and the implementation of key functionalities, the project aims to enhance productivity and organization. Future developments will focus on improving usability, performance, and security, ensuring that the system meets evolving user needs and technological advancements.


# ScreenShots

## Home Page
<img width="960" alt="home" src="https://github.com/Coders6754/Magnet-Brains/assets/128929403/8aa5769a-eff4-444c-8ea5-783a0d06c5fe">

## Signup Page
<img width="959" alt="signup" src="https://github.com/Coders6754/Magnet-Brains/assets/128929403/e0f45183-c413-44c3-b7b7-8157d862bd0d">

## Login Page
<img width="960" alt="login" src="https://github.com/Coders6754/Magnet-Brains/assets/128929403/04a61577-9658-4f92-8d64-fec1ad117b7b">

## Todo List
<img width="953" alt="management " src="https://github.com/Coders6754/Magnet-Brains/assets/128929403/4bd26f99-ad30-4e94-8ad5-5146c6b295d7">

## Add To do
<img width="959" alt="Add to do" src="https://github.com/Coders6754/Magnet-Brains/assets/128929403/71d07ae3-d572-459c-96e1-54da2b6776ae">

## Duedates
<img width="959" alt="duedate" src="https://github.com/Coders6754/Magnet-Brains/assets/128929403/a3b90aa5-69f4-4e8e-81af-3e9d13c981d8">

## Updates
<img width="960" alt="update" src="https://github.com/Coders6754/Magnet-Brains/assets/128929403/d7bad48d-7efd-480b-a080-f124b09411df">

