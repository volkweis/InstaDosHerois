import React from 'react'
import UserImg from '../userImage/UserImg';
import {Container, Nome, TextoComment} from './commentStyle';

export default function Comment({comment}) {
    return (
        <Container>
            <UserImg userName={comment.user} height="50px" width="50px"/>
            <Nome>{comment.user}</Nome>
            <TextoComment>{comment.comment}</TextoComment>
        </Container>
    )
}
