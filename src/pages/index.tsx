import {
	HStack,
	Text,
	VStack,
	Image,
	UnorderedList,
	ListItem,
	Button,
} from '@chakra-ui/react';
import { getNeighbourLocation } from '../utils/getNeighbourLocation';
import { getOffers } from '../utils/getOffers';
import { getUserAddress } from '../utils/getUserAddress';

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
}

const Home = (props: HomeProps) => {
	const { userAddress, offers } = props;
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
					{(offers || []).map(({ id, fields }: OfferType) => (
						<HStack
							justifyContent="center"
							alignItems="center"
							spacing={16}
							border="2px"
							borderColor="gray.200"
							rounded="lg"
							padding={4}
							key={id}
						>
							<Image
								src={fields.Logo[0].url}
								alt={fields.Name || ''}
								boxSize="80px"
								objectFit="contain"
							/>
							<VStack justifyContent="start" alignItems="start" flex={1}>
								<Text fontSize="3xl" textTransform="capitalize">
									{fields.Promotion}
								</Text>
								<UnorderedList>
									{fields['Promo Details'].map((promo: string) => (
										<ListItem key={promo}>{promo}</ListItem>
									))}
								</UnorderedList>
							</VStack>
							<Button colorScheme="blue" size="lg" textTransform="capitalize">
								GET Bonus
							</Button>
						</HStack>
					))}
				</VStack>
			</VStack>
		</VStack>
	);
};

export async function getServerSideProps(context: any) {
	const userAddress = await getUserAddress();
	const offers = await getOffers();
	const nearLocation = await getNeighbourLocation(-111.093735, 34.048927);
	return {
		props: {
			userAddress,
			offers,
			nearLocation,
		},
	};
}

export default Home;
