import type { NextPage } from 'next';
import {
	HStack,
	Box,
	Text,
	VStack,
	Image,
	UnorderedList,
	ListItem,
	Button,
} from '@chakra-ui/react';

const Home: NextPage = () => {
	const neighboutState = [];
	return (
		<VStack>
			<VStack justifyContent="start" alignItems="start">
				<VStack justifyContent="start" alignItems="start">
					<Text fontSize="4xl" textTransform="capitalize">
						BEST Sportsbook offers in ...
					</Text>
					<Text fontSize="2xl">Neighbour is 2234 miles away from you.</Text>
				</VStack>
				<VStack>
					<HStack
						justifyContent="center"
						alignItems="center"
						spacing={16}
						border="2px"
						borderColor="gray.200"
						rounded="lg"
						padding={4}
					>
						<Image
							src="https://bit.ly/dan-abramov"
							alt="Dan Abramov"
							boxSize="80px"
							objectFit="cover"
						/>
						<VStack justifyContent="start" alignItems="start" flex={1}>
							<Text fontSize="3xl" textTransform="capitalize">
								BEST Sportsbook offers in ...
							</Text>
							<UnorderedList>
								<ListItem>Lorem ipsum dolor sit amet</ListItem>
								<ListItem>Consectetur adipiscing elit</ListItem>
							</UnorderedList>
						</VStack>
						<Button colorScheme="blue" size="lg" textTransform="capitalize">
							GET Bonus
						</Button>
					</HStack>
				</VStack>
			</VStack>
		</VStack>
	);
};

export default Home;
