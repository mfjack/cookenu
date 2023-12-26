import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { EmailInput } from '../../components/Inputs/EmailInput';
import NameInput from '../../components/Inputs/NameInput';
import PasswordInput from '../../components/Inputs/PasswordInput';
import {
    CenteredContainer,
    FormContainer,
} from '../../components/Styled-containers';
import { validateEmail, validateName, validatePassword } from '../../constants';
import useForm from '../../hooks/useForm';
import { goToFeed } from '../../routes/coordinator';

const SignUp = () => {
    const [form, onChangeInputs] = useForm({
        email: '',
        password: '',
        name: '',
    });

    const navigate = useNavigate();

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.password));
        setIsNameValid(validateName(form.name));
    };

    return (
        <CenteredContainer>
            <FormContainer onSubmit={onSubmit}>
                <img src={Logo} alt='Logotipo Cookenu' />
                <NameInput
                    value={form.name}
                    onChange={onChangeInputs}
                    isValid={isNameValid}
                />
                <EmailInput
                    value={form.email}
                    onChange={onChangeInputs}
                    isValid={isEmailValid}
                />
                <PasswordInput
                    value={form.password}
                    onChange={onChangeInputs}
                    isValid={isPasswordValid}
                />

                <Button type='submit' onClick={() => goToFeed(navigate)}>
                    Cadastrar
                </Button>
            </FormContainer>
        </CenteredContainer>
    );
};

export default SignUp;
