import {
	Box,
	Stack,
	Text,
	Center,
	Image,
	Container,
	Link,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type NavLinkType = {
	label: string;
	url: string;
};
const navLink: NavLinkType[] = [
	{
		url: '/best_odds',
		label: 'Best odds',
	},
	{
		url: '/expert_picks',
		label: 'Expert Picks',
	},
	{
		url: '/ranking',
		label: 'Rankings',
	},
	{
		url: '/signup',
		label: 'Sign Up',
	},
];

const MainLayout = ({ children }: { children: ReactElement }) => {
	const currentYear = new Date().getFullYear();
	const router = useRouter();
	return (
		<Stack width="100%" direction="column" spacing={8}>
			<Box boxShadow="base" width="100%">
				<Container maxW={['container.sm', 'container.lg']}>
					<Stack
						width="100%"
						py="16px"
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<NextLink href="/" passHref>
							<Link
								_hover={{
									textDecoration: 'none',
								}}
							>
								<Stack direction="row" alignItems="center">
									<Image
										src="https://tallysight.com/ts-logo.png"
										alt="TallySight"
										objectFit="contain"
										boxSize="50px"
									/>
									<Text color="black" fontSize="2xl" fontWeight="bold">
										Tallysight
									</Text>
								</Stack>
							</Link>
						</NextLink>

						<Stack
							spacing={8}
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							display={['none', 'flex']}
						>
							{navLink.map((link: NavLinkType) => (
								<NextLink href={link.url} passHref key={link.label}>
									<Link
										fontWeight="bold"
										textColor="gray.500"
										textTransform="uppercase"
										borderBottom={router.pathname === link.url ? '2px' : 0}
										_hover={{
											textDecoration: 'none',
										}}
									>
										{link.label}
									</Link>
								</NextLink>
							))}
						</Stack>
					</Stack>
				</Container>
			</Box>
			<Box minH="73vh">
				<Container maxW={['container.sm', 'container.lg']}>
					{children}
				</Container>
			</Box>
			<Box bg="black">
				<Container maxW={['container.sm', 'container.lg']}>
					<Stack
						flexDir="column"
						justifyContent="center"
						alignItems="center"
						py={8}
					>
						<Text color="white" fontWeight="bold">
							© {currentYear} TALLYSIGHT INC. RESERVED{' '}
						</Text>
						<Text
							color="gray.400"
							textAlign="center"
							fontSize="sm"
							fontWeight="bold"
						>
							If you or someone you know has a gambling problem and wants help,
							call 1-8000-Gambler. You must be 21 years or older to place bet.
						</Text>
					</Stack>
				</Container>
			</Box>
		</Stack>
	);
};

export default MainLayout;
