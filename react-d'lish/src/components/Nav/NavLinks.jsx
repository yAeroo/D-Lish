import { useTranslation } from "react-i18next";
// Para una mejor velocidad entre link
import { Link } from 'react-router-dom';

const NavLinks = () => {

    const { t } = useTranslation();

    const Enlaces = [
        {
            name: t("actions.login"),
            link: "/auth/login",
        },
        {
            name: t("actions.register"),
            link: "/auth/register",
        },
    ];

    return (
        <>
            {Enlaces.map((Enlace, i) => (
                <li key={i} className="text-xl font-semibold hover:text-terc">
                    <Link to={Enlace.link}>{Enlace.name}</Link>
                </li>
            ))}
        </>
    );
};

export default NavLinks;