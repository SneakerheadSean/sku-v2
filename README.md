# SKU v2 README 

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**SKU v2** is an update to the SKU app. This new version allows the user to login and see their collection is greater detail and clarity. Along with having a dedicated showcase page under your account, you can know search for your favorite sneaker and read historical facts that pertains to that model.


<br>

## MVP

**SKU v2** 

|               MVP                 | Description                                    
| :-----------------------------:   | :-----------------------------------------     
|       CRUD Functionality          | App will have full CRUD Functionality for users as well as for sneaker inventory/collection     
|  Authentication and Authorization | App will allow users to register for an account and will require login credentials to view and make changes to their account      
|              AXIOS                | Multiple Axios requests will be handled properly and display accurate responses.     
|     Consume and render data       | Consume data from my Ruby on Rails API, and render that data in my React components. 


<br>

### Goals

### Server (Back End) ---------
- Build a Ruby on Rails server, exposing RESTful JSON endpoints.
- Utilize Rails to define models for interacting with the database.
- Implement working controller actions for Full CRUD (index, show, create, update, delete)

### Client (Front End)
- Beautiful and Responsive website
- Understandable and organized React file structure
- Utilize state and props in my components efficiently.
- Utilize React Router, for client-side routing.

<br>

### Libraries and Dependencies


|     Library      | Description                                
| :--------------: | :----------------------------------------- 
|      React       | A JavaScript library for building user interfaces
|   React Router   | React Router is a collection of navigational components that compose declaratively with your application.|
|   Ruby on Rails  | Ruby - A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write. Rails is a web application development framework written in the Ruby programming language.


<br>

### Client (Front End)

#### Wireframes

[WireFrame](https://www.figma.com/file/nkLvt5Wyd2djrRvFw1x2Dl/SKU-v2?node-id=16%3A59)

#### Component Tree


#### Component Architecture

``` structure
x
src
|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Layout.jsx
      |__ Footer.jsx
      |__ ProductCard.jsx
      |__ ProductEdit.jsx
|__ services/
      |__ config.js
screens/
      LandingPage
      HomePage
      HistoryPage
      CommentsPage
```

#### Time Estimates


| Task                    | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Design and Consulting   |    L     |     5 hrs      |     10 hrs     |    14 hrs    |
| Web Application Setup   |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Back End CRUD Actions   |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Front End CRUD Actions  |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Authentication and Authorization    |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL                   |          |     6 hrs      |     3 hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

[ERD](https://app.diagrams.net/#G1downV5oXggUAY1dMdPZGB564TUKyOWl4)


<br>

***

## Post-MVP



***

## Code Showcase



## Code Issues & Resolutions

