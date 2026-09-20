import Navbar from "./Navbar"
import style from './header.module.css'
const Header = ()=>{
    return(
        <header style={{display : 'flex', justifyContent : 'space-around'}}>
            {/* <header className={style.header}> */}
            <a href="/">Logo</a>
            <Navbar/>
        </header>
    )
}
export default Header