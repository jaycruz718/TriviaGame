let user = {
    username: String,
    isAdmin: Boolean,
    email: String,
    password: String,
    timeStamp: Date,
    badges: [MongoId],
    incorrectQuestions: [MongoId]
}