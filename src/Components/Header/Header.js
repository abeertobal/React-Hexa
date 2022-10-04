import './Header.css'
import logo from '../../assets/img/logo.png'

const Header = () => {
    return(
        <>
            <div> 
              
                <div className="container">
                    <div className="nav">
                        <div className="logo">
                            <img src={logo}  alt="HEXASHOP" />
                        </div>
                            <ul className="menu" >
                                <li><a className="menu_item ho" href="#home"> Home </a></li>
                                <li><a className="menu_item" href="#men's"> Men's </a></li>
                                <li><a className="menu_item" href="#women's"> Women's </a></li>
                                <li><a className="menu_item" href="#kid's"> Kid's </a></li>
                                <li><a className="menu_item" href="#pages"> Pages <i className="down"></i> </a></li>
                                <li><a className="menu_item" href="#features"> Features <i className="down"></i> </a></li>
                                <li><a className="menu_item" href="#explore"> Explore </a></li>
                                
                            </ul> 
                    </div>
            </div>

            </div>
        </>
    )
}

export default Header