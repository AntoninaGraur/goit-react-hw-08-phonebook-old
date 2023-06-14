
import {RegistrationLoginList, RegistrationLoginItem, RegistrationLoginLink} from './navigation.styled'

function NavigationLink() {
  return (
    <>
      <RegistrationLoginList>
        <RegistrationLoginItem>
          <RegistrationLoginLink to="/register">Registration</RegistrationLoginLink>
        </RegistrationLoginItem>
        <RegistrationLoginItem>
          <RegistrationLoginLink  to="/login">Log in</RegistrationLoginLink>
        </RegistrationLoginItem>
      </RegistrationLoginList>
    </>
  );
}

export default NavigationLink;