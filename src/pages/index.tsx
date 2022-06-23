import { Text, VStack, Box, Center } from '@chakra-ui/react';
import OfferCard from '../components/OfferCard';
import MainLayout from '../layout/MainLayout';
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

export type FieldType = {
	CTA: string;
	URL: string;
	Promotion: string;
	Name: string;
	Logo: OfferLogo[];
	['Promo Details']: string[];
};

type OfferType = {
	id: string;
	fields: FieldType;
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
	return (
		<MainLayout>
			<VStack
				justifyContent="start"
				alignItems="start"
				padding={{ base: '12px' }}
				spacing={6}
			>
				<VStack justifyContent="start" alignItems="start">
					<Text fontSize={['2xl', '4xl']} textTransform="capitalize">
						BEST Sportsbook offers in {userAddress.state || userAddress.city}
					</Text>
					<Text fontSize={['md', 'xl']}>
						{nearLocation.name} is {nearLocation.distance} miles away from you.
					</Text>
				</VStack>
				<VStack spacing={6} width="100%">
					{(offers || []).map(({ id, fields }: OfferType) => (
						<Box key={id} width="100%">
							<OfferCard id={id} fields={fields} />
						</Box>
					))}
				</VStack>
			</VStack>
		</MainLayout>
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
