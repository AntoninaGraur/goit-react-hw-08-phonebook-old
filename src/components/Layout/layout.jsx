import { Outlet } from 'react-router-dom';


import NavigationLink from '../Navigation/navigation';
import GlobalNav from '../GlobalNav/globalNav';
import UserAuthoriz from '../UserAuthoriz/userAuthoriz';
import { useSelector } from 'react-redux';
import { HeaderNav } from './layout.styled';

function Layout() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <HeaderNav>
        <GlobalNav />
        {isLoggedIn && <UserAuthoriz />}
        {!isLoggedIn && <NavigationLink />}
      </HeaderNav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;