import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { EmailInput } from '../../components/Inputs/EmailInput';
import PasswordInput from '../../components/Inputs/PasswordInput';
import {
    CenteredContainer,
    FormContainer,
} from '../../components/Styled-containers';
import { validateEmail, validatePassword } from '../../constants';
import useForm from '../../hooks/useForm';
import { goToSignUp } from '../../routes/coordinator';
import axios from 'axios'

const Login = () => {
    const [form, onChangeInputs] = useForm({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.password));
    };

    return (
        <CenteredContainer>
            <FormContainer onSubmit={onSubmit}>
                <img src={Logo} alt='Logotipo Cookenu' />
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

                <Button type='submit'>Entrar</Button>
                <Button type='button' onClick={() => goToSignUp(navigate)}>
                    Cadastrar
                </Button>
            </FormContainer>
        </CenteredContainer>
    );
};

export default Login;
