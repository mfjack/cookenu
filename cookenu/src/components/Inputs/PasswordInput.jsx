import {
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ isValid, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormControl isInvalid={!isValid}>
            <InputGroup size='md'>
                <Input
                    name='password'
                    placeholder='Senha'
                    value={value}
                    onChange={onChange}
                    type={showPassword ? 'text' : 'password'}
                />
                <InputRightElement width='3rem'>
                    <Button h='2.5rem' size='md' onClick={onClickShowPassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {!isValid ? (
                <FormErrorMessage>
                    Senha inválida, mínimo 8 caracteres
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    );
};

export default PasswordInput;
