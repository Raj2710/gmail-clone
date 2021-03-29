import React from 'react';
import styled from'styled-components';
import CheckBox from '@material-ui/core/CheckBox';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import {emailData} from '../temp/EmailData';
import EmailItem from '../emailitem/EmailItem';
function EmailsView(){
    return(
        <Wrapper>
            <TopWrapper> 
                    <CheckBox/>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </TopWrapper>
            <EmailsContainer>
                {
                    emailData.map(({starred,from, subject, message, recieved, read},index)=>(
                        <EmailItem
                            starred ={starred}
                            from={from}
                            subject={subject}
                            message={message}
                            recieved={recieved}
                            read={read}
                            key ={index}
                        />
                        
                    ))
                }
            </EmailsContainer>
        </Wrapper>
    )
}
export default  EmailsView

const Wrapper = styled.div`
`
const TopWrapper = styled.div`
    padding-left:20px;
    height:48px;
`
const EmailsContainer = styled.div`
`