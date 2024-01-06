import React from 'react';
import { Typography, Box } from '@mui/material';
import { StyledContactListItem } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  return (
    <StyledContactListItem>
      <Typography variant="body1" component="p">
        {contact.name}:
      </Typography>
      <Box color="blueviolet">
        <Typography variant="body1" component="span">
          {contact.number}
        </Typography>
      </Box>
    </StyledContactListItem>
  );
};
