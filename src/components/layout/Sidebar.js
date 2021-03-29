import React from 'react';
import styled from 'styled-components'
import Compose from '../buttons/Compose'
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import PhoneIcon from '@material-ui/icons/Phone';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar(){
    return(
        <div>
            <Wrapper>
            <TopSectionWrapper>    
                <ComposeWrapper>
                    <Compose/>
                </ComposeWrapper>
                <SideButtonsWrapper>
                    <SidebarButtonItem><InboxIcon/> Inbox</SidebarButtonItem>
                    <SidebarButtonItem><StarIcon/> Starred</SidebarButtonItem>
                    <SidebarButtonItem><WatchLaterIcon/> Snoozed</SidebarButtonItem>
                    <SidebarButtonItem><SendIcon/> Sent</SidebarButtonItem>
                    <SidebarButtonItem><InsertDriveFileIcon/> Drafts</SidebarButtonItem>
                    <SidebarButtonItem><LabelIcon/> Notes</SidebarButtonItem>
                    <SidebarButtonItem><ExpandMoreIcon/> More</SidebarButtonItem>
                </SideButtonsWrapper>
            </TopSectionWrapper>
                <BottomSectionWrapper>
                    <SidebarSectionWrapper>
                        <Title><b>Meet</b></Title>
                        <p><VideocamIcon/>New Meeting</p>
                        <p><KeyboardIcon/>Join Meeting</p>
                    </SidebarSectionWrapper>
                    <SidebarSectionWrapper>
                            <Title><b>Hangouts</b></Title>
                            <p><AccountCircleIcon/>Nagarajan Raj</p>
                    </SidebarSectionWrapper>
                    <BottomIconsWrapper>
                           <div>
                            <PersonIcon/>
                            <FormatQuoteIcon/>
                            <PhoneIcon/>
                            </div>
                    </BottomIconsWrapper>
                </BottomSectionWrapper>
            </Wrapper>
        </div>
    )
}
export default Sidebar
const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height:91vh;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`
const TopSectionWrapper = styled.div`

`
const BottomSectionWrapper = styled.div`
    margin-bottom:10px;
`
const ComposeWrapper = styled.div`
    display: grid;
    place-items:start;
    padding: 10px 20px;
`
const SideButtonsWrapper = styled.div``
const SidebarSectionWrapper = styled.div`
    border-top:1px solid lightgray;
    p{
        color:gray;
        display:grid;
        grid-template-columns:14% auto;
        padding:5px 25px;
    }
`
const BottomIconsWrapper = styled.div`
    display:flex;
    justify-content:center;
    border-top:1px solid lightgray;
    cursor:pointer;
    color:gray;
    .MuiSvgIcon-root{
        padding:2px;
    }
`
const SidebarButtonItem = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    color:gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor:pointer;
    margin-right:8px;
    :hover{
        background-color:#f5f7f7;
    }
`
const Title = styled.div`
    padding-left:25px;
    margin-bottom: 4px;
    margin-top:8px;
`