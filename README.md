# Lingo :u5272:
### An app that can teach you languages. The only limit is you.
![Langs](https://mycroft.ai/wp-content/uploads/2018/05/languages-edited.png)

##  0. Initial Setup
Lessons and courses are hard to make. For this reason there is a folder DatabaseExample in which you can find the documents I made in order for you to have a look at the app without having to deal with creating entities. The admin username is 'delov23' and the password is '123456'. For a simple user you can go with u: 'user1' and p: 'user1'.

##  1. Overview
Lingo is an application that aims to teach one a new language in a fun and creative way. Basically, the project consists of two parts - a `back-end` one and a `front-end` one. The `back-end` fragment is created with the framework _express_ whereas in the `front-end` piece I have used _Angular_. The functionality is divided into two roles - `Admin` and `User`. The admin is the one who creates courses and lessons and removes them. Also, the admin can disapprove/approve requests for becoming a part of the app's team. The user can take advantage of all the available lessons and also apply to be an admn. There is also an `Anonymous` role in which one can only see the landing page, register and login.
  
##  2. Back-end
### Type `node index` in the console of the API folder to start it
As I mentioned earlier the framework used for the server logic is _express_. The API works on port **9999** and has the following functionalities: 
  * User:
    - `/auth/signup` (Authentication route)
    - `/auth/signin` (Authentication route)
    - `/user/profile`
    - `/user/addCourse/:id`
  * Course:
    - `/course/all`
    - `/course/create`
  * **Lesson** - create, delete and preview a lesson
    - `/lesson/findByCourse/:id`
    - `/lesson/:id`
    - `/lesson/remove/:id`
  * Application
    - /application/apply
    - /application/approve/{0 or 1}/:id
    - /application/:id
    - /application/all
    - /application/user/:id
  * Question - create a question for the test that is in a lesson
    - _Has a reference to the test array in the lesson schema and is used when creating a test in a lesson_
  * Word - create a word for the lesson
    - _Has a reference to the words array in the lesson schema and is used when creating a word list in a lesson_
##  3. Front-end
### Type `npm start` in the console of the langs-app folder to start it
The used framework for the front-end is _Angular_. These are the highlights from it:
  * Home Page:
    - Anonymous: Generic Landing Page
    - User/Admin: A preview of all the courses which are available
  * Create Lesson Form:
    - Dynamic addition of words and questions
  * Preview Lesson:
    - A lesson has three stages and the `/lesson/preview/:id` is the route they can be found in. 
    - First, it shows th vocabulary secion, then the grammar one. 
    - Finally, a test (quiz) is displayed.
    - The test has bonus functionality - to show whether an answer is correct or wrong.
  * User Profile:
    - The user profile shows the basic information about a registered person and their courses. A course is added to one's profile when they have completed at least one lesson of it.
  * Preview Lessons in a Course:
    - Dynamic page that shows all the lessons in a course. If the user is admin, they can manage the lessons (remove them).
  * Notifications and Basic Design Concept:
    - I have used toastr as a notification helper.
    - Material + Bootstrap for the design
    - ngx-loading-bar for HTTP requests 
  * Core Module:
    - Services for making HTTP requests to the API
    - Guards for **lazy loading** and restricted areas
    - Interceptors that interrupt HTTP requests to notify the user/add headers to certain requests
    - Resolvers for dealing with the HTTP request before the view is initialised