# TV Trivia App

## User Stories
- As a user, I want an account to track my score over time.

- As a user, I want to be able to select a category for question themes.
- As a user, I want to able to choose my difficulty so I can play at my preferred level.

- As a user, I would like to see questions that showed a movie clip and guess that movie.
- As a user, I want to see question timed, to keep gameplay moving.
- As a user, I want to be able to spectate.
- As a user, I would like to see a leader board for comparing how I did to others.
- As a user, I would like to see a dynamic point system (maybe wager points).
- As a user, I want to use the platform to learn new movies and bookmark them.
- As a user, I want to see what categories I've already done or questions I've gotten wrong.
- As a guest, I want to be able to use the website without an account.
- As a user, I want to unlock (badges) achievements as I use over time.

- As a user, I would like to compete with friends (multiplayer trivia).
- As a user, I want to see what category I am best/worst at.
- As a user, I want to see what questions I got wrong and what the right answer was.
- As a user, I want to invite to get rewards in the games.


- As a dev, I want to randomize question order for repeatability and avoid duplicate questions.
- As a Dev, I want to be able to manage accounts to ensure data accuracy.
- As a dev, I want to set up automated tests for gameplay mechanics, so that I can prevent bugs when updating the game.


## Types of Users
- User
- Guest
- Administrator

### What collection are we going to need
### What properties should these collections have? What is the shape of our data?

### User Routes
- POST create a user account
- POST login user
- GET Profile information / stats
- PUT update user profile (password, username, image)
- DELETE user (both admin and user)

### Admin Routes
- GET all users account
- POST create new category


### Question Routes
- GET question(s) by category/theme
- POST create question(s) route (will need admin middleware)
- DELETE question(s) route (admin middleware)
- PUT/PATCH edit question route (admin middleware)

### Game Routes
- POST create new game
- PUT update/end game
- PUT check question speed
- GET current/past game information
- GET top scores
- DELETE games

### Practice Setting Up Server
### Dependencies
- Express
- Mongoose
- dotenv
- nodemon
-cors (not necessary now, but when we connect the front to back we will need it)

### Middleware
- Global Error Handling
- Loggin middleware
- Parsing Middleware - express.json()

### Environmental Variables
- PORT
- MongoURI 

### Collections/Schemas
- Questions
- Users/Admin
- Game 