import { NavBar } from "../style/Styles"

const Nav = () => {
    return(
    <NavBar>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li className="JScenter"><a href="#home">js</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
    </NavBar>
    )
}
export default Nav