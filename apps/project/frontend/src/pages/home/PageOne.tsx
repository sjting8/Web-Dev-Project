import { MainBox } from 'style/Boxes';
import UserTable from 'components/UserTable';
import { peopleProp } from 'utils/Interfaces';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PageOne = ({ users }: peopleProp) => {
	const navigate = useNavigate();
	const routeChange = () => {
		const path = '/create';
		navigate(path);
	};
	return (
		<MainBox id='PageOne' data-testid='PageOne'>
			<Button
				onClick={() => {
					routeChange();
				}}
			>
				Create
			</Button>
			<UserTable users={users} />
		</MainBox>
	);
};

export default PageOne;
