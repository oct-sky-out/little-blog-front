'use server';

import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Gnb } from '@/components/common/Gnb';
import { Footer } from '@/components/common/Footer';

type GnbAndLnbProps = { children: React.ReactNode };

const Common: React.FC<GnbAndLnbProps> = ({ children }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}
		>
			<CssBaseline />
			<Gnb />
			<Container component='main' sx={{ mt: 8, mb: 2 }}>
				{children}
			</Container>
			<Footer />
		</Box>
	);
};

export default Common;
