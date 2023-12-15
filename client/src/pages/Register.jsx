import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

const Register = () => {
	const handleSubmit = (value) => {
		console.log(value);
	};
	return (
		<div className='authentication'>
			<div className='authentication-form card p-3'>
				<h1 className='card-title'>Nice to meet you</h1>
				<Form layout='vertical' onSubmit={handleSubmit}>
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
