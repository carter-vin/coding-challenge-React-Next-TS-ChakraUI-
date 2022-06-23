import { Box, Stack, Text, Center, Image } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

const MainLayout = ({ children }: { children: ReactElement }) => {
	const currentYear = new Date().getFullYear();
	return (
		<Box width={'100%'}>
			<Stack bg="red.300">
				<Center>
					<Image
						src="https://tallysight.com/ts-logo.png"
						alt="TallySight"
						boxSize={['40px', '100px']}
						objectFit="contain" 
					/>
				</Center>
			</Stack>
			<Box width={'100%'}>{children}</Box>
			<Center>
				<Text>Copyright - {currentYear}</Text>
			</Center>
		</Box>
	);
};

export default MainLayout;
