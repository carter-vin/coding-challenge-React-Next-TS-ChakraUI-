import {
	HStack,
	Text,
	VStack,
	Image,
	UnorderedList,
	ListItem,
	Button,
	Box,
	Link,
	Center,
} from '@chakra-ui/react';
import { getNeighbourLocation } from '../utils/getNeighbourLocation';
import { getOffers } from '../utils/getOffers';
import { getUserAddress } from '../utils/getUserAddress';
import { LocationType } from './api/neighbor_location';

type Thumbnauil = {
	url: string;
	width: number;
	height: number;
};

type OfferLogo = {
	url: string;
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
		Logo: OfferLogo[];
		['Promo Details']: string[];
	};
};

interface HomeProps {
	userAddress: {
		state?: string;
		city: string;
		loc: string;
	};
	offers: OfferType[];
	nearLocation: LocationType;
}

const Home = (props: HomeProps) => {
	const { userAddress, offers, nearLocation } = props;
	console.log('nearLocation', offers);
	return (
		<Center>
			<VStack
				justifyContent="start"
				alignItems="start"
				padding={{ base: '12px' }}
			>
				<VStack justifyContent="start" alignItems="start">
					<Text fontSize="4xl" textTransform="capitalize">
						BEST Sportsbook offers in {userAddress.state || userAddress.city}
					</Text>
					<Text fontSize="2xl">
						{nearLocation.name} is {nearLocation.distance} miles away from you.
					</Text>
				</VStack>
				<VStack spacing={6}>
					{(offers || []).map(({ id, fields }: OfferType) => (
						<HStack
							spacing={16}
							border="2px"
							borderColor="gray.200"
							rounded="lg"
							paddingY={4}
							paddingX={[4, 8]}
							key={id}
						>
							<Image
								src={fields.Logo[0].url}
								alt={fields.Name || ''}
								boxSize={['200px', '100px']}
								objectFit="contain"
							/>
							<VStack
								justifyContent="start"
								alignItems="start"
								flex={1}
								width={{
									base: '100%',
									md: '500px',
								}}
							>
								<Text fontSize="3xl" textTransform="capitalize">
									{fields.Promotion}
								</Text>
								<Box>
									<UnorderedList>
										{fields['Promo Details'].map((promo: string) => (
											<ListItem key={promo}>{promo}</ListItem>
										))}
									</UnorderedList>
								</Box>
							</VStack>
							<Link
								href={fields.URL}
								isExternal
								textDecoration="none"
								_hover={{
									textDecoration: 'none',
								}}
							>
								<Button colorScheme="blue" size="lg" textTransform="capitalize">
									GET Bonus
								</Button>
							</Link>
						</HStack>
					))}
				</VStack>
			</VStack>
		</Center>
	);
};

export async function getServerSideProps() {
	const userAddress = await getUserAddress();
	const userAddressPinPoint = userAddress?.loc.split(',');
	const offers = await getOffers();
	const nearLocation = await getNeighbourLocation({
		longitude: userAddressPinPoint[0] || -92.199997,
		latitude: userAddressPinPoint[1] || 34.799999,
	});
	return {
		props: {
			userAddress,
			offers,
			nearLocation,
		},
	};
}

export default Home;
