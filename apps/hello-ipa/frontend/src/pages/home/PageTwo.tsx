import { Box } from '@mui/material';
import IndividualRecords from 'components/IndividualRecords';
import { peopleProp } from 'utils/Interfaces';

const PageTwo = ({ users }: peopleProp): JSX.Element => (
	<Box id='PageTwo' data-testid='PageTwo'>
		<IndividualRecords users={users} />
	</Box>
);

export default PageTwo;
