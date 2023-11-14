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
                <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Login de Usuários</legend>
                <div>
                <label htmlFor="idEmail">E-mail</label>
                <input type="email" name="email" id="idEmail" placeholder="Digite seu E-mail." value={usuario.email} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="idSenha">Senha</label>
                <input type="password" name="senha" id="idSenha" placeholder="Digite sua Senha." value={usuario.senha} onChange={handleChange}/>
                </div>
                <div>
                <button>Login</button>
                </div>
                </fieldset>
                </form>
            </div>
         
           
        </main>
    )
}