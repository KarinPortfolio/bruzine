import Logo from './logo.png' 

function Header(){
    return(
        <header>
            <nav>
                <img src={Logo} alt="logo"/>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Endereço</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header