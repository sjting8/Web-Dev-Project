import { peopleProp } from 'utils/Interfaces';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const tableStyle = {
	borderCollapse: 'collapse',
	width: 500,
	height: 700,
	border: '2px solid black',
} as const;

let config: { key: string; direction: string };

const useSortableData = ({ users }: peopleProp) => {
	const [sortConfig, setSortConfig] = useState(config);

	const sortedUsers = useMemo(() => {
		const sortableUsers = [...users];
		if (sortConfig !== undefined) {
			sortableUsers.sort((a, b) => {
				if (sortConfig.key === 'name') {
					if (a.name < b.name) {
						return sortConfig.direction === 'ascending' ? -1 : 1;
					}
					if (a.name > b.name) {
						return sortConfig.direction === 'ascending' ? 1 : -1;
					}
					return 0;
				}
				if (a.age < b.age) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
				if (a.age > b.age) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableUsers;
	}, [users, sortConfig]);

	const requestSort = (key: string) => {
		let direction = 'ascending';
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === 'ascending'
		) {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	return { items: sortedUsers, requestSort };
};

const UserTable = ({ users }: peopleProp) => {
	const { items, requestSort } = useSortableData({ users });
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};
	const openRecord = (id: number | undefined) => {
		navigate(`/page-2/${id}`);
	};
	return (
		<div>
			<label htmlFor='search'>
				Search User:
				<input id='search' type='text' onChange={handleSearch} />
			</label>
			<table style={tableStyle}>
				<tr>
					<th>
						<Button
							onClick={() => {
								requestSort('name');
							}}
							style={{ background: 'grey' }}
						>
							Name
						</Button>
					</th>
					<th>
						<Button
							onClick={() => {
								requestSort('age');
							}}
							style={{ background: 'grey' }}
						>
							Age
						</Button>
					</th>
				</tr>
				{items
					.filter((row) =>
						row.name
							.toString()
							.toLowerCase()
							.includes(search.toString().toLowerCase()),
					)
					.map((val) => (
						<tr style={{}}>
							<td>
								<Button
									style={{ backgroundColor: 'transparent', color: 'black' }}
									onClick={() => openRecord(val.id)}
								>
									{val.name}
								</Button>
							</td>
							<td>{val.age}</td>
						</tr>
					))}
			</table>
		</div>
	);
};

export default UserTable;
