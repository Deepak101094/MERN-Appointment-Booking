const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://deepak:deepak123@cluster0.bqlatf5.mongodb.net/stayhealthy"
);

const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("MongoDB is success connected");
});

connection.on("error", (error) => {
	console.log("Error in mongoDB connection", error);
});

module.exports = mongoose;
