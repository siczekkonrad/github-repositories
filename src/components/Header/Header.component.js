import React from 'react'
import Navigation from '../Navigation/Navigation.component';
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: #000;
`;

const StyledHeading = styled.div`
    color: #fff;
    font-size: 40px;
`;

const Header = () => (
    <StyledHeader>
        <StyledHeading>
            Repozytoria
        </StyledHeading>
        <Navigation/>
    </StyledHeader>
)


export default Header