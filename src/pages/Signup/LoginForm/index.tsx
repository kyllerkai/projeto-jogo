/* eslint-disable */
import React, { useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Box, FormControl, FormLabel, Input, Stack,
  Checkbox, Button, Text, useToast,
} from '@chakra-ui/react';
import * as ROUTES from '../../../constants/routes';
import { useAuth } from '../../../context/AuthContext';
export const SinupForm: React.FC = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordConfirmRef = useRef<HTMLInputElement>(null);
	const history = useHistory();
	const { signup } = useAuth();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const toast = useToast();
	const handleSubmit: ((event: React.FormEvent) => Promise<void>) = async (e) => {
		e.preventDefault();
		let password = passwordRef.current?.value;
		let passwordConfirm = passwordConfirmRef.current?.value;
		let email = emailRef.current?.value;
		if (password !== passwordConfirm) {
			toast({
				title: 'As senhas não correspondem!',
				status: 'error',
				duration: 2500,
				isClosable: true,
			});
		}
		if (Number(password) < 8) {
			toast({
				title: 'A senha deve conter 8 caracteres.',
				status: 'error',
				duration: 2500,
				isClosable: true,
			});
		}
		if (email === '' || password === '' || passwordConfirm === '') {
			toast({
				title: 'Insira todos os campos!',
				status: 'error',
				duration: 2500,
				isClosable: true,
			});
		};
		try {
			setLoading(true);
			await signup(email, password);
			history.push("/");
		} catch (error) {
			toast({
				title: 'Ocorreu um erro. Tente novamente.',
				status: 'error',
				duration: 2500,
				isClosable: true,
			});
		};
		setLoading(false);

	};
	return (
		<Box my={8} textAlign="left" as="form" onSubmit={handleSubmit}>
			<FormControl id="email">
				<FormLabel>Email:</FormLabel>
				<Input
					type="email"
					ref={emailRef}
					required
					placeholder="Insira o seu endereço de email"
					backgroundColor="gray.800"
					focusBorderColor="purple.500"
				/>
			</FormControl>

			<FormControl mt={4} id="password">
				<FormLabel>Senha:</FormLabel>
				<Input
					type="password"
					placeholder="Coloque sua senha"
					backgroundColor="gray.800"
					focusBorderColor="purple.500"
					ref={passwordRef}
					required
				/>
			</FormControl>
			<FormControl mt={4} id="passwordy">
				<FormLabel>Comfirmar senha:</FormLabel>
				<Input
					type="password"
					placeholder="Coloque sua senha"
					backgroundColor="gray.800"
					focusBorderColor="purple.500"
					ref={passwordConfirmRef}
					required
				/>
			</FormControl>

			<Stack isInline justifyContent="space-between" mt={4}>
				<Box>
					<Checkbox>Lembre-me</Checkbox>
				</Box>
			</Stack>
			<Button
				type="submit"
				width="full"
				mt={4}
				_hover={{ backgroundColor: 'purple.600' }}
				height="40px"
				backgroundColor="purple.500"
				isLoading={loading}
				loadingText="Loading..."
			>
				Sign In
			</Button>

			<Text mt="4px">
				Já tem uma conta?
				<Link to={ROUTES.SIGN_IN} id="link">
					{' '}
					Login
				</Link>
			</Text>

			{
				error && <div className="alert">{error}</div>
			}
		</Box>
	)
}
