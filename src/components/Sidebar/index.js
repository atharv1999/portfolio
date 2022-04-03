import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-a.png';
import LogoSubtitle from '../../assets/images/logo-subtitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
    <div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo' src={LogoSubtitle} alt='Atharv' />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/"> 
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to='/about'> 
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink activeclassname="active" className='contact-link' to='/contact'> 
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/atharv-arote-96b7381b2/'
            >
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </li>
        <li>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/atharv1999'
            >
                <FontAwesomeIcon icon={faGithub}/>
            </a>
        </li>
        <li>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://twitter.com/AtharvArote'
            >
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
        </li>
        <li>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://www.hackerrank.com/atharvarote'
            >
                <FontAwesomeIcon icon={faCode}/>
            </a>
        </li>
    </ul>
</div>
)
}

export default Sidebar;