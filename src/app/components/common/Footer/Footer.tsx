'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary' data-testid='copyright'>
			{'Copyright © '}
			<Link color='inherit' href='https://mui.com/'>
				BS Auto
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				backgroundColor: (theme) =>
					theme.palette.mode === 'light'
						? theme.palette.grey[200]
						: theme.palette.grey[800],
			}}
		>
			<Container maxWidth='sm'>
				<Typography variant='body1' />
				<Copyright />
			</Container>
		</Box>
	);
};

export default Footer;
