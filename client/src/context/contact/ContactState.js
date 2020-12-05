import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Joe Rogan',
				email: 'email2@email.com',
				phone: '444-444-4444',
				type: 'professional',
			},
			{
				id: 2,
				name: 'Walter Rogan',
				email: 'email3@email.com',
				phone: '644-444-4444',
				type: 'personal',
			},
			{
				id: 3,
				name: 'Victor Rogan',
				email: 'email4@email.com',
				phone: '544-444-4444',
				type: 'professional',
			},
		],
		current: null,
		filtered: null,
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	const addContact = (contact) => {
		contact.id = v4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};
	const setCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};
	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};
	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};
	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;