import React, { useEffect } from 'react'

import { Container, Logo, AppName } from './styles'
import logo from '../../assets/logo.png'

function Splash(props) {
    useEffect(() => {
		setTimeout(() => {props.navigation.navigate('App')}, 2000)
	}, []);

    return (
        <Container>
            <AppName>APP NAME SPLASH</AppName>
            <Logo source={logo}/>
        </Container>
    )
}

export default Splash
