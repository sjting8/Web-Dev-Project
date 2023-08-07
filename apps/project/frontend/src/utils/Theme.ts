import { createTheme, Theme } from '@mui/material';

const colorTheme: Theme = createTheme({
	palette: {
		primary: {
			light: '#E6F2EB',
			main: '#067734',
			dark: '#066031',
			contrastText: '#FFFFFF',
		},
		text: {
			primary: '#333333',
		},
		textcolor: {
			light: '#AAAAAA',
			main: '#757575',
			dark: '#333333',
			contrastText: '#FFFFFF',
		},
		primaryLight: {
			light: '#DFECE6',
			main: '#8EBBA5',
			dark: '#BEDECD',
			contrastText: '#FFFFFF',
		},
		secondary: {
			light: '#5966A3',
			main: '#2E3C80',
			dark: '#1B225D',
			contrastText: '#FFFFFF',
		},
		success: {
			light: '#5C8CE5',
			main: '#3A6FD3',
			dark: '#1E55BC',
			contrastText: '#FFFFFF',
		},
		icons: {
			light: '#9E9E9E',
			main: '#54655D',
			contrastText: '#FFFFFF',
		},
		whites: {
			light: '#FFFFFF',
			main: '#FFFFF1',
			dark: '#EEEEEE',
			contrastText: '#FFFFFF',
		},
		warning: {
			light: '#FFE96E',
			main: '#FFD800',
			dark: '#DDBB00',
			contrastText: '#FFFFFF',
		},
		textBackground: {
			main: '#DFECE6',
		},
		info: {
			light: '#5D5D5D',
			main: '#43464B',
			dark: '#000000',
			contrastText: '#FFFFFF',
		},
		error: {
			light: '#AC190E',
			main: '#D3261A',
			dark: '#DC5D54',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#FFFFFF',
		},
	},
});

const theme: Theme = createTheme(
	{
		typography: {
			fontFamily: 'Roboto, sans-serif',
			h1: {
				fontFamily: 'Roboto, sans-serif',
				fontWeight: 300,
				fontSize: '96px',
			},
			h2: {
				fontFamily: 'Roboto, sans-serif',
				fontWeight: 300,
				fontSize: '60px',
			},
			h3: {
				fontSize: '48px',
			},
			h4: {
				fontSize: '34px',
			},
			h5: {
				fontSize: '24px',
			},
			h6: {
				fontFamily: 'Roboto, sans-serif',
				fontWeight: 500,
				fontSize: '20px',
			},
			subtitle1: {
				fontFamily: 'Roboto, sans-serif',
				fontWeight: 'bold',
				fontSize: '16px',
			},
			subtitle2: {
				fontFamily: 'Roboto, sans-serif',
				fontWeight: 500,
				fontSize: '14px',
			},
			body1: {
				fontSize: '16px',
			},
			body2: {
				fontSize: '14px',
			},
			button: {
				small: {
					fontFamily: 'Roboto, sans-serif',
					fontWeight: 500,
					fontSize: '13px',
				},
				standard: {
					fontFamily: 'Roboto, sans-serif',
					fontWeight: 600,
					fontSize: '15px',
					padding: '8px',
				},
				large: {
					fontFamily: 'Roboto, sans-serif',
					fontWeight: 500,
					fontSize: '15px',
				},
			},
			caption: {
				fontSize: '12px',
			},
			overline: {
				fontFamily: 'Roboto, sans-serif',
				fontWeight: 700,
				fontSize: '12px',
			},
		},
		spacing: 8,
		components: {
			MuiAccordion: {
				styleOverrides: {
					root: {
						borderTopRightRadius: 0,
						borderTopLeftRadius: 0,
					},
				},
			},
			MuiAppBar: {
				defaultProps: {
					elevation: 0,
				},
			},
			MuiBadge: {
				styleOverrides: {
					standard: {
						top: '-5px',
						right: '-7px',
						transform: 'scale(.75) translate(50%,-50%)',
						transformOrigin: '100% 0%',
						color: 'rgba(0, 0, 0, 0.87)',
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						padding: 10,
					},
					contained: {
						boxShadow: '0px',
						paddingLeft: 22,
						paddingRight: 22,
					},
					outlined: {
						paddingLeft: 22,
						paddingRight: 22,
					},
					containedSizeSmall: {
						padding: 4,
						paddingLeft: 10,
						paddingRight: 10,
					},
					textSizeSmall: {
						padding: 4,
						paddingLeft: 10,
						paddingRight: 10,
					},
				},
				defaultProps: {
					variant: 'contained',
					color: 'primary',
					disableElevation: true,
				},
			},
			MuiCard: {
				defaultProps: {
					variant: 'elevation',
					elevation: 12,
				},
			},
			MuiCardHeader: {
				styleOverrides: {
					action: {
						marginTop: '5px',
						marginRight: '-5px',
					},
				},
			},
			MuiDrawer: {
				styleOverrides: {
					paper: {
						zIndex: 1200 + 3,
					},
				},
			},
			MuiGrid: {
				defaultProps: {
					spacing: 0,
				},
			},
			MuiIconButton: {
				styleOverrides: {
					root: {
						color: colorTheme.palette.icons?.main,
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						minWidth: 150,
					},
				},
			},
			MuiSnackbar: {
				styleOverrides: {
					anchorOriginBottomCenter: {
						'@media (min-width: 600px)': {
							bottom: 70,
						},
					},
				},
			},
			MuiTab: {
				styleOverrides: {
					root: {
						color: colorTheme.palette.whites?.light,
						opacity: 1,
						minWidth: 100,
						textTransform: 'none',
						fontSize: '0.8rem',
						fontFamily: 'Roboto, sans-serif',
						fontWeight: 500,
						borderBottomColor: colorTheme.palette.whites?.light,
						borderBottomStyle: 'solid',
						borderBottomWidth: 0.5,
						paddingBottom: 0,
						paddingLeft: 20,
						paddingRight: 20,
						'&.Mui-selected': {
							color: colorTheme.palette.whites?.light,
							fontWeight: 700,
						},
					},
				},
			},
			MuiTabs: {
				styleOverrides: {
					root: {
						marginLeft: 19,
						paddingBottom: 16,
					},
					indicator: {
						height: 4,
						backgroundColor: colorTheme.palette.whites?.light,
					},
				},
			},
			MuiTableCell: {
				styleOverrides: {
					root: {
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					},
				},
			},
			MuiTextField: {
				defaultProps: {
					variant: 'outlined',
				},
			},
			MuiPaper: {
				styleOverrides: {
					elevation0: {
						boxShadow:
							'0px 7px 8px - 4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
					},
				},
			},
		},
	},
	colorTheme,
);

export default theme;
