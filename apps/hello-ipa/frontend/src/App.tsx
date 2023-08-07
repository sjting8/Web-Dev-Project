import { person } from 'utils/Interfaces';
import { useEffect, useState } from 'react';
import { Outlet, Route, Routes, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PageOne from 'pages/home/PageOne';
import PageTwo from 'pages/home/PageTwo';
import Create from 'pages/home/Create';
import Grid from '@mui/material/Grid';
import NavBar from './components/NavBar';
import { getDemo } from './actions/DemoAction';

const App = (): JSX.Element => {
	const [people, setPeople] = useState<person[]>([
		{ id: 100, name: 'Default', age: 10 },
		{ id: 200, name: 'Test', age: 1 },
		{ id: 300, name: 'Greg', age: 20 },
	]);
	const [refresh, setRefresh] = useState<boolean>(false);
	useEffect(() => {
		getDemo()
			.then((response) => {
				console.log(response);
				if (response.message === 'success') {
					setPeople(response.data);
				}
			})
			.catch(() => {
				console.log('Error in fetching data');
			});
	}, [refresh]);

	const pageStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
	};

	return (
		<Grid container style={pageStyle}>
			<NavBar />
			<Outlet />
			<Routes>
				<Route path='/' element={<Navigate to='/home' replace />} />
				<Route path='/home' />
				<Route
					path='/page-1'
					element={
						<div style={pageStyle}>
							<PageOne users={people} />
							<Button
								onClick={() => {
									setRefresh((prev) => !prev);
								}}
							>
								Refresh Table
							</Button>
						</div>
					}
				/>
				<Route path='/page-2/:id' element={<PageTwo users={people} />} />
				<Route path='/create' element={<Create />} />
			</Routes>
		</Grid>
	);
};

export default App;
