//  import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import mainNavBarItems from './consts/navbarListItems';

const NavBar = () => {
	const navigate = useNavigate();
	const drawerWidth = 200;

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					backgroundColor: '#101F33',
					color: 'rgba(255, 255, 255, 0.7)',
				},
			}}
			variant='permanent'
			anchor='left'
		>
			<Divider />
			<List>
				{mainNavBarItems.map((item) => (
					<ListItemButton key={item.id} onClick={() => navigate(item.route)}>
						<ListItemText primary={item.label} />
					</ListItemButton>
				))}
			</List>
		</Drawer>
	);
};
export default NavBar;
