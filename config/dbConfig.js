const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGO_URl}`
		);
		console.log(
			`MongoDB connected !! DB HOST: ${connectionInstance.connection.host} `
		);
	} catch (error) {
		console.log("MONGODB connection FAILED:", error);
		process.exit(1);
	}
};

// mongoose.connect(process.env.MONGO_URl);

// const connection = mongoose.connection;

// connection.on("connected", () => {
// 	console.log("MongoDB is success connected");
// });

// connection.on("error", (error) => {
// 	console.log("Error in mongoDB connection", error);
// });

module.exports = connectDB;
