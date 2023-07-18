// Para una mejor velocidad entre link
import { Link } from 'react-router-dom';

const NavLinks = () => {
    const Enlaces = [
        {
            name: "Iniciar sesión",
            link: "/auth/login",
        },
        {
            name: "Registrarse",
            link: "/auth/register",
        },
    ];

    return (
        <>
            {Enlaces.map((Enlace, i) => (
                <li key={i} className="text-xl font-semibold hover:text-terc hover:bg-accent">
                    <Link to={Enlace.link}>{Enlace.name}</Link>
                </li>
            ))}
        </>
    );
};

export default NavLinks;