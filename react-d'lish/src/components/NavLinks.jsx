import React from 'react';

const NavLinks = () => {
    const Links = [
        {
            name:"Iniciar Sesion",
            link:"/",
        },
        {
            name:"Registrarse",
            link:"/",
        },
    ];
    
        return (
        <>
            {Links.map((Link, i) => (
                <li key={i} className="font-semibold hover:text-terc">
                    <a href={Link.link}>{Link.name}</a>
                </li>
            ))}
        </>
    );
};

export default NavLinks;