import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactEntryForm } from 'components/ContactEntryForm/ContactEntryForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <title>Your Contacts</title>
      </div>
      <ContactEntryForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <SearchFilter />
      <ContactList />
    </>
  );
}
