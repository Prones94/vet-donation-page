import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './containers';
import { Landing, Register, Invest, Login } from './pages';
import { userAuth } from './context';
import { ApolloProvider } from '@apollo/client';
import { Footer } from './containers/Footer/Footer';

export function App() {
	return (
		<ApolloProvider client={userAuth}>
			<Header />

			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/invest' element={<Invest />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
			<Footer />
		</ApolloProvider>
	);
}
