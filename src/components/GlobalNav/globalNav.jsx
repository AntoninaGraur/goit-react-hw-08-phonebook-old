
import {HomeContactsList, HomeContactsItem, HomeContactsLink} from './globalNav.styled'

function GlobalNav() {
  return (
    <>
      <HomeContactsList>
        <HomeContactsItem>
          <HomeContactsLink to="/">Home page</HomeContactsLink>
        </HomeContactsItem>
        <HomeContactsItem>
          <HomeContactsLink to="/contacts"> Contacts</HomeContactsLink>
        </HomeContactsItem>
      </HomeContactsList>
    </>
  );
}

export default GlobalNav;