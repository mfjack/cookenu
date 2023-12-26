import { ChakraProvider, theme } from '@chakra-ui/react';
import { Router } from '../src/routes/router';

const App = () => {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Router />
            </ChakraProvider>
        </>
    );
};

export default App;
