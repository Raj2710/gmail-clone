import React from 'react';
import EmailsView from './EmailsView';
import Sidebar from './Sidebar';
import SideIcons from './SideIcons';
import styled from 'styled-components';
function Main()
{
    return(
        <Wrapper>
            <Sidebar/>
            <EmailsView/>
            <SideIcons/>
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 270px auto 50px;
`