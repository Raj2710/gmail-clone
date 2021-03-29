import React , {useState} from 'react';
import styled from 'styled-components';
import CheckBox from '@material-ui/core/CheckBox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
const EmailItem = (props)=>{
    const [star, setStar] = useState(props.starred) 
    return (
        <Wrapper>
            <CheckBox/>
            <IconButton onClick={()=>star?setStar(false):setStar(true)}>
                {
                    star?(
                        <StarIcon htmlColor="#f7cb69"></StarIcon>
                    ):(<StarBorderIcon/>)

                }
            </IconButton>
            <p className={!props.read ? 'unread':'read'}>{props.from}</p>
            <div>
                <p className={!props.read ? 'unread':'read'}>{props.subject}</p>-<span>{props.message}</span>
            </div>
            <p className={!props.read ? 'unread':'read'}>{props.recieved}</p>
        </Wrapper>
    )
}

export default EmailItem;

const Wrapper = styled.div`
    padding-left:20px;
    boreder-top: 1px solid lightgray;
    display: grid;
    grid-template-columns:min-content min-content 120px auto min-content;
    align-items:center;
    cursor:pointer;
    padding-right:20px;
    div{
        display:flex;
        span{
            color:darkgray;
        }
    }
    .unread{
        color:black;
        font-weight:bolder;
    }
    .read{
    }

`