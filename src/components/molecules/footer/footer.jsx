import "./footer.css"
import { Link, useParams } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {

    const { idUser } = useParams()

    return (
        <nav className="footerContainer">
            <Link to={`/${idUser}`}>OLYMPYAN</Link>
            <div>
                <a href="https://github.com/BrunoViscardi"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/bruno-viscardi-6a054b174/"><LinkedInIcon/></a>
                <a href="https://www.instagram.com/bruno.viscard1/"><InstagramIcon/></a>     
            </div>
        </nav>
    )


}


export default Footer