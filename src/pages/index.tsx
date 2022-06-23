import {
	HStack,
	Text,
	VStack,
	Image,
	UnorderedList,
	ListItem,
	Button,
} from '@chakra-ui/react';
import { getOffers } from '../utils/getOffers';
import { getUserAddress } from '../utils/getUserAddress';

type Thumbnauil = {
	url: string;
	width: number;
	height: number;
};

type OfferLogo = {
	thumbnails: {
		small: Thumbnauil;
		large: Thumbnauil;
		full: Thumbnauil;
	};
};

type OfferType = {
	id: string;
	fields: {
		CTA: string;
		URL: string;
		Promotion: string;
		Name: string;
		Logo: any;
	};
};

interface HomeProps {
	userAddress: {
		state?: string;
		city: string;
		loc: string;
	};
	offers: OfferType[];
}

const Home = (props: HomeProps) => {
	const { userAddress, offers } = props;
	console.log('the offers', offers);
	return (
		<VStack>
			<VStack justifyContent="start" alignItems="start">
				<VStack justifyContent="start" alignItems="start">
					<Text fontSize="4xl" textTransform="capitalize">
						BEST Sportsbook offers in {userAddress.state || userAddress.city}
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

export async function getServerSideProps(context: any) {
	const userAddress = await getUserAddress();
	const offers = await getOffers();
	return {
		props: {
			userAddress,
			offers,
		},
	};
}

export default Home;
