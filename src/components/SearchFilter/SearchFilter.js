import React from 'react';
import { useDispatch } from 'react-redux';
import {
  StyledSearchFilter,
  ContactTitle,
  StyledInput,
} from './SearchFilter.styled';
import { changeFilter } from 'redux/contacts/filterSlice';

export const SearchFilter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactTitle>Contacts</ContactTitle>
      <StyledSearchFilter>
        <h2>Search contacts</h2>
        <StyledInput
          type="text"
          placeholder="Search..."
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </StyledSearchFilter>
    </>
  );
};
