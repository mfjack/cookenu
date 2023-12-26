import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

export const EmailInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <Input
                name='email'
                placeholder='E-mail'
                value={value}
                onChange={onChange}
            />
            {!isValid ? (
                <FormErrorMessage as='p'>E-mail inválido</FormErrorMessage>
            ) : undefined}
        </FormControl>
    );
};
