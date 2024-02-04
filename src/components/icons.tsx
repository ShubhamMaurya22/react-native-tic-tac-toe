import React from 'react'
import type { PropsWithChildren } from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome';

type iconsProps = PropsWithChildren<{
    name : string;
}>

 const icons = ({name} : iconsProps) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#F7CA18"/>
            break;
        case 'cross':
            return <Icon name="times" size={38} color="#26C281"/>
            break;

        default:
            return <Icon name="pencil" size={38} color="#36454F" />
    }
}

export default icons;

