const express = require("express");

const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
	// console.log(req.body, "body");
	try {
		const userExists = await User.findOne({ email: req.body.email });
		if (userExists) {
			return res.status(400).send({ message: "User Already Exists" });
		}
		const password = req.body.password;

		const salt = await bcrypt.genSalt(10);

		const hashePassword = await bcrypt.hash(password, salt);

		req.body.password = hashePassword;

		const newUser = new User(req.body);

		await newUser.save();

		res.status(200).send({
			messsage: "User created succesfully",
			success: true,
		});
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.send({ message: "something went wrong!", success: false, error });
	}
});

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res
				.status(200)
				.send({ message: "User doest not exist", success: false });
		}
		const isMatchPass = await bcrypt.compare(req.body.password, user.password);
		if (!isMatchPass) {
			return res
				.status(200)
				.send({ message: "Incorrect Password", success: false });
		} else {
			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
				expiresIn: "1d",
			});
			res
				.status(200)
				.send({ message: "Login Successful", success: true, data: token });
		}
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.send({ message: "error while login", success: false, error });
	}
});

module.exports = router;
