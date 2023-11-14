import Image from 'next/image'
import LogoPorto from '../assets/images/logoporto.png'
import Menu from './components/menu.jsx'
 
export default function Home(){
 
    return(
        <main>
            <div>
                <Menu></Menu>
                <Image src={LogoPorto} alt="LogoPorto" className='LogoPorto'/>
                <h1>Login</h1>
            </div>
         
           
        </main>
    )
}