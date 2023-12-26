import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding-inline: 2rem;
    align-items: center;
    background-color: ${theme.colors.laranja['500']};
`;
