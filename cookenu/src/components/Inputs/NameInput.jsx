import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

const NameInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <Input
                name='name'
                placeholder='Nome'
                value={value}
                onChange={onChange}
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Nome inválido, mínimo de 3 caracteres
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    );
};

export default NameInput;
