import React from 'react-router-dom';
import logo from '../icons_assets/Logo.svg'

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterraneran restaurant, 
                        focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Log In</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>123 Towncity, USA</li>
                        <li>Phone: <br/>+1 023 039 3392</li>
                        <li>Email: <br/>little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Medina</h3>
                    <ul>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">YouTube</a></li>
                        <li><a href="/">FaceBook</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    );
}

export default Footer;