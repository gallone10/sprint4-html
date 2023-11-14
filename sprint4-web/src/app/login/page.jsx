import Image from 'next/image'
import LogoPorto from '../assets/images/logoporto.png'
import Menu from './components/menu.jsx'
import { useState } from 'react'
import roberto from '../vistoria'
 
export default function Home(){

    return(
        <main>
            <div>
                <Menu></Menu>
                <Image src={LogoPorto} alt="LogoPorto" className={roberto.Logo}/>
                <h1>Login</h1>
            </div>
        </main>
    )
}