/* eslint-disable */
import React from 'react';
import { SimpleGrid, Box, Flex, Image, Button, Badge, Stack } from '@chakra-ui/react';
import data from '../../data/anime.json';
export default function Card() {
	const [imageBg, setImage] = React.useState('');
	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');
	React.useEffect(() => {
		var x = Math.floor((Math.random() * data.length - 1) + 1);
		setImage(data[x].urlImage);
		setName(data[x].name);
		setDescription(data[x].description);
	}, []);
	return (
		<Box
			as="section"
			my={12}
			mx={{ base: "1rem", md: "5rem" }}
		>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} as="article">
				<Flex bg="brand.400">
					<Image
						src={imageBg}
						alt={name}
						fit="cover"
						w="full"
						h={{ base: 64, md: "full" }}
						bg="gray.100"
						loading="lazy"
						opacity={0.9}
					/>
				</Flex>
				<Flex
					direction="column"
					alignItems="start"
					justifyContent="center"
					px={{ base: 4, md: 8, lg: 20 }}
					py={10}
				>
					<Stack direction="row">
						<Badge
							bg="purple.500"
							color="gray.300"
						>Fã-animation
						</Badge>
					</Stack>
					<Box
						mb={4}
						fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
						fontWeight="bold"
						color="gray.300"
						lineHeight="shorter"
						textShadow="2px 0 currentcolor"
					>
						{name}
					</Box>
					<Box
						pr={{ base: 0, lg: 16 }}
						mb={4}
						fontSize="lg"
						color="gray.400"
						letterSpacing="wider"
					>
						{description}
					</Box>
					<Button
						w={{ base: "full", sm: "auto" }}
						size="lg"
						bg="gray.900"
						_hover={{ bg: "gray.700" }}
						color="gray.100"
						as="a"

					>
						Acesse Já
					</Button>
				</Flex>
			</SimpleGrid>
		</Box>
	);
};
