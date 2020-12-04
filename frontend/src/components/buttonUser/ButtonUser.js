import React from 'react'
import { useStore } from '../../stores';
import UserImg from '../userImage/UserImg';
import {Container, Nome} from './buttonUserStyle';

export default function ButtonUser({name}) {
    const {user} = useStore();
    const { changeUser } = useStore();
   
    return (
        <Container onClick={()=>changeUser(name)} bgColor={name === user ? 'lightgrey': 'white'}>
            <UserImg userName={name} height="40px" width="40px" />
            <Nome>{name}</Nome>
        </Container>
    )
}
