// Componentes
import ProfileInfo from "../../components/Profile/ProfileInfo";
import ProfileSetttings from "../../components/Profile/ProfileSetttings";
import ProfilePfp from "../../components/Profile/ProfilePfp";
import RegresarProfile from "../../components/Profile/RegresarProfile";

// Protección de rutas
import { useAuth } from "../../hooks/useAuth";

export default function Settings() {
    const { user } = useAuth({ middleware: 'auth' });

    return (
        <>
            <div id="pf-bttns" className="relative">
                {/* Botón cambio foto de perfil */}
                <ProfilePfp />
                <RegresarProfile url="/profile" />
            </div>

            {/* Información de perfil */}
            <ProfileInfo user={user} />

            {/* Contenedor para centrar info */}
            <div className="flex flex-col flex-grow justify-center">
                {/* Campos de configuración */}
                <ProfileSetttings /> 
            </div>
        </>
    )
}
