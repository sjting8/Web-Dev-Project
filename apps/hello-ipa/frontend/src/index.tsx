import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './utils/Theme';

const Main = (): JSX.Element => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<CssBaseline />
			<App />
		</BrowserRouter>
	</ThemeProvider>
);

ReactDOM.render(<Main />, document.querySelector('#root'));
