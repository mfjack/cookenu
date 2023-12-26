import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { goToFeed, goToLogin, goToSignUp } from '../../routes/coordinator';
import { HeaderContainer } from './styled';

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <Button onClick={() => goToFeed(navigate)}>Cookenu</Button>
            <Button onClick={() => goToLogin(navigate)}>Login</Button>
        </HeaderContainer>
    );
};

export default Header;
