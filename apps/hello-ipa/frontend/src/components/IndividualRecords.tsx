import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { postDemo, deleteDemo } from '../actions/DemoAction';
import { person, peopleProp } from '../utils/Interfaces';

const IndividualRecords = ({ users }: peopleProp) => {
	const { id } = useParams();
	let userID;
	if (id !== undefined) {
		userID = +id;
	}
	const [oldAge, setOldAge] = useState<number>();
	const [oldName, setOldName] = useState<string>();
	const [newAge, setNewAge] = useState<number>();
	const [newName, setNewName] = useState<string>();
	const navigate = useNavigate();
	const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = +e.target.value;
		setNewAge(val);
	};
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewName(e.target.value);
	};

	useEffect(() => {
		let record: person[] = [{ id: -1, name: 'failed', age: -1 }];
		if (id !== undefined) {
			record = users.filter((user) => user.id === +id);
		}
		setOldName(record[0].name);
		setOldAge(record[0].age);
		setNewName(record[0].name);
		setNewAge(record[0].age);
	}, [id, users]);

	const updatedData = {
		name: newName,
		age: newAge,
		id: userID,
	} as person;

	const checkSame = () => {
		if (oldAge !== newAge || oldName !== newName) {
			postDemo(updatedData.name, updatedData.age, updatedData.id);
		}
		navigate('/page-1');
	};

	return (
		<div>
			<h1>Edit Record</h1>
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
				disabled={newAge === undefined || newAge < 0}
				onClick={() => {
					checkSame();
				}}
			>
				Save
			</Button>
			<Button
				onClick={() => {
					if (id !== undefined) {
						deleteDemo(id);
					}
					navigate('/page-1');
				}}
			>
				Delete
			</Button>
		</div>
	);
};

export default IndividualRecords;
