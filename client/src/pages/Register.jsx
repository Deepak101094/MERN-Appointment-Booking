import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
	const navigate = useNavigate();
	const handleSubmit = async (formData) => {
		try {
			const res = await axios.post("/api/user/register", formData);
			if (res.data.status) {
				toast.success("Register Successfull!");
				toast("Redirecting to login page..");
				navigate("/login");
			} else {
				toast.error("Something went wrong!");
			}
		} catch (error) {
			toast.error("User Already Exists!");
		}
	};
	return (
		<div className='authentication'>
			<div className='authentication-form card p-3'>
				<h1 className='card-title'>Nice to meet you</h1>
				<Form layout='vertical' onFinish={handleSubmit}>
					<Form.Item label='Name' name='name'>
						<Input placeholder='Name' />
					</Form.Item>
					<Form.Item label='Email' name='email'>
						<Input placeholder='Email' />
					</Form.Item>
					<Form.Item label='Password' name='password'>
						<Input placeholder='Password' type='password' />
					</Form.Item>
					<Button className='primary-button my-2' htmlType='submit'>
						Register
					</Button>

					<Link to='/login' className='anchor mt-2'>
						click here to login
					</Link>
				</Form>
			</div>
		</div>
	);
};

export default Register;
