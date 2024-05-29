import { Carousel, ItemType } from '@/components/carousel';
import { Grid } from '@mui/material';

export default function Home() {
	const items: ItemType[] = [
		{
			name: 'Random Name #1',
			description:
				'Probably the most random thing you have ever seen! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae necessitatibus magni ratione earum dolorem reiciendis aliquid placeat sunt ipsa dolor, expedita, veniam quas. Corrupti atque iure voluptatum consectetur amet.',
		},
		{
			name: 'Random Name #2',
			description: 'Hello World!',
		},
	];

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sx={{ height: '100%' }}>
				<Carousel items={items} />
			</Grid>
		</Grid>
	);
}
