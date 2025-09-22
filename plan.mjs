// Possible Objects


// Question / Answer / Category?
let question = {
    questionText: String,
    category: String,
    genre: String,
    incorrectResponses: [String],
    correctAnswer: String,
    difficulty: String,
    points: Number,
    inActive: Boolean
}
// User (Admin) profile
let user = {
    username: String,
    isAdmin: Boolean,
    email: String,
    password: String,
    timeStamp: Date,
    badges: [MongoId],
    incorrectQuestions: [MongoId]
}

// game
// // user(s)
// // category
// // score:
// // completed: Boolean
// // created At
let game = {
    user: MongoID,
    category: String,
    score: Number,
    completed: Boolean,
    createdAt: Date
}

// Session / game type
// Leaderboard

// category collection? (stretch)
// Lobby? (Stretch)

let category = {
    name: String,
    active: Boolean
}
