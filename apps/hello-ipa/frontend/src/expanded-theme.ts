import '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
	interface Palette {
		icons?: Palette['primary'];
		primaryLight: Palette['primary'];
		textBackground?: Palette['primary'];
		textcolor?: Palette['primary'];
		whites?: Palette['primary'];
	}
	interface PaletteOptions {
		icons?: PaletteOptions['primary'];
		primaryLight: PaletteOptions['primary'];
		textBackground?: PaletteOptions['primary'];
		textcolor?: PaletteOptions['primary'];
		whites?: PaletteOptions['primary'];
	}
}
