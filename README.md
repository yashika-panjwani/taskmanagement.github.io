# Task Management Application
Task Management is a full-stack application that helps you organize your responsibilities more easily, providing a user-friendly interface. The application was built using the MERN stack (MongoDB, Express.js, React.js, Node.js), as well as TailwindCSS and Redux Toolkit. 

# How To Run
- Git clone repository
- Create your own .env file that should contain:
  - PORT = <YOUR_PORT>
  - MONGO_URI = <YOUR_MONGO_URI>
  - JWT_SECRET = <YOUR_JWT_SECRET>
  
- Run these commands in terminal/shell:
  -  <b>npm install</b> in backend folder
  -  <b>npm install</b> in frontend folder
  -  <b>npm run dev</b> at the root of the project 

# Project Architecture

### Root
```   
└───backend
└───frontend
└───node_modules
│   package-lock.json 
│   package.json 
│   README.md
```

### Backend Folder
```
│   server.js    
└───config
    │   db.js
└───controllers
    │   taskController.js
    │   userController.js
└───middleware
    │   authMiddleware.js
    │   errorMiddleware.js
└───models
    │   taskModel.js
    │   userModel.js
└───routes
    │   taskRoutes.js
    │   userRoutes.js
```

### Frontend Folder
```   
└───public
└───src
│   .gitignore 
│   package-lock.json 
│   package.json
│   postcss.config.js
│   tailwind.config.js
└───node_modules
```

# Application Review

### Login Page
![Login](https://user-images.githubusercontent.com/84568841/156879302-a1f3c85c-005b-4af5-907d-33533eb88a3d.png)


### Registration Page
![Registration](https://user-images.githubusercontent.com/84568841/156879304-20742b5a-1d56-4898-9c42-3444709f8f58.png)


### Create Task
![Create Task](https://user-images.githubusercontent.com/84568841/156879305-3620b7f8-ed3c-4a30-b742-95c66fa5604c.png)


### My Tasks
![My Tasks](https://user-images.githubusercontent.com/84568841/157099639-7ec0b2d5-0f10-47e5-a161-a14c19972eb7.png)


### Empty Task List
![Empty Task List](https://user-images.githubusercontent.com/84568841/157098706-2b6a5de8-9813-4a7d-a598-5cb334a34fc6.png)


### Single Task

![Single Task](https://user-images.githubusercontent.com/84568841/156879313-df608b9d-f23a-4126-bedf-73b7a59a0daa.png)



