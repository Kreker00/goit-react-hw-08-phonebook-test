import styled from '@emotion/styled';
import { AppBar as MuiAppBar, Toolbar } from '@mui/material';

export const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  background: `url('https://oir.mobi/uploads/posts/2021-03/1616546229_23-p-chernii-fon-na-rabochii-stol-24.jpg') no-repeat center center fixed`,
  backgroundSize: 'cover',
  padding: '20px',
  transformOrigin: 'left top',
}));

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
