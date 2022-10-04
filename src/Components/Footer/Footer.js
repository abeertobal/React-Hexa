import './Footer.css'


const Footer = () => {
    return(
        <>
            <div> 

                <div className="container">
                    <p className="lead">
                        <strong> HEXASHOPE </strong>
                    </p>

                    <a href="#" className="position-absolute bottom-0 end-0 p-3">
                        <i className="bi bi-arrow-up-circle h2"></i>
                    </a>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="facebook"   target="_blank" href="https://www.facebook.com/focal.x.agency/" >Facebook </a></li>
                        <li className="nav-item"><a className="linkedin"    target="_blank" href="https://www.linkedin.com/company/focal-x-agency"      >LinkedIn </a></li>
                        <li className="nav-item"><a className="youtube"    target="_blank" href="https://www.youtube.com/c/NourHomsi/playlists"  >Youtube </a></li>
                        <li className="nav-item"><a className="instagram"  target="_blank" href="https://www.instagram.com">Instagram</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer