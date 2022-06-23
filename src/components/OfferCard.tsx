import {
	Stack,
	Center,
	VStack,
	UnorderedList,
	ListItem,
	Button,
	Image,
	Text,
	Link,
	Box,
} from '@chakra-ui/react';
import React from 'react';
import { FieldType } from '../pages';

interface OfferCard {
	id: string;
	fields: FieldType;
}
const OfferCard = (props: OfferCard) => {
	const { id, fields } = props;
	return (
		<Stack
			direction={['column', 'row']}
			alignItems={['flex-start', 'center']}
			spacing={[4, 16]}
			border="2px"
			borderColor="gray.200"
			rounded="lg"
			paddingY={4}
			paddingX={[4, 8]}
			key={id}
			width="100%"
		>
			<Box width="200px" height="100px">
				<Image
					src={fields.Logo[0].url}
					alt={fields.Name || ''}
					width="100%"
					height="100%"
					objectFit="contain"
				/>
			</Box>
			<VStack justifyContent="start" alignItems="start" flex={1}>
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
		</Stack>
	);
};

export default OfferCard;
