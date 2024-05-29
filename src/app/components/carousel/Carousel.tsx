'use client';

import React from 'react';
import * as MuiCarousel from 'react-material-ui-carousel';
import { Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { v4 } from 'uuid';

export type ItemType = { name: string; description: string };

const Carousel: React.FC<{ items: ItemType[] }> = (props) => {
	return (
		<MuiCarousel.default
			NextIcon={<ChevronRightIcon data-testid='right-btn' />}
			PrevIcon={<ChevronLeftIcon data-testid='left-btn' />}
		>
			{props.items.map((item) => (
				<Item key={v4()} name={item.name} description={item.description} />
			))}
		</MuiCarousel.default>
	);
};

const Item = (props: ItemType) => {
	return (
		<div>
			<h2>{props.name}</h2>
			<p>{props.description}</p>

			<Button className='CheckButton'>Check it out!</Button>
		</div>
	);
};

export default Carousel;
