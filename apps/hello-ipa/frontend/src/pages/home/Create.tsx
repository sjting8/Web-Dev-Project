import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { postDemo } from '../../actions/DemoAction';

const Create = () => {
	const [newAge, setAge] = useState<number>(0);
	const [newName, setName] = useState<string>('');
	const navigate = useNavigate();

	const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = +e.target.value;
		setAge(val);
	};
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	return (
		<div>
			<h1>Create Record</h1>
			<input
				placeholder='Name'
				value={newName}
				onChange={handleNameChange}
				type='text'
			/>
			<input
				placeholder='Age'
				value={Number(newAge).toString()}
				onChange={handleAgeChange}
				type='number'
			/>
			<Button
				onClick={() => {
					postDemo(newName, newAge, undefined);
					navigate('/page-1');
				}}
			>
				Create
			</Button>
		</div>
	);
};

export default Create;
