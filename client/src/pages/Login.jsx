import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = async (userData) => {
		try {
			const res = await axios.post("/api/user/login", userData);

			if (res.data.success) {
				toast.success(res.data.message);
				toast("Redirecting to home page..");
				localStorage.setItem("token", res.data.data);
				navigate("/");
			} else {
				toast.error(res.data.message);
			}
		} catch (error) {
			toast.error("User Already Exists!");
		}
	};

	return (
		<div className='authentication'>
			<div className='authentication-form card p-3'>
				<h1 className='card-title'>Welcome Back</h1>
				<Form layout='vertical' onFinish={handleSubmit}>
					<Form.Item label='Email' name='email'>
						<Input placeholder='Email' />
					</Form.Item>
					<Form.Item label='Password' name='password'>
						<Input placeholder='Password' type='password' />
					</Form.Item>
					<Button className='primary-button my-2' htmlType='submit'>
						Login
					</Button>

					<Link to='/register' className='anchor mt-2'>
						Click here to Register
					</Link>
				</Form>
			</div>
		</div>
	);
};

export default Login;
