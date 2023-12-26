import styled from 'styled-components';

export const CenteredContainer = styled.div`
    height: 88vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
`;

export const FormContainer = styled.form`
    min-width: 30vw;
    max-width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    align-items: center;

    img {
        width: 15rem;
    }

    button {
        width: 100%;
    }
`;
