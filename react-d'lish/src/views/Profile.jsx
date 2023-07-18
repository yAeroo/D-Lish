// Componentes
import ProfileButtons from "../components/ProfileButtons";
import ProfileInfo from "../components/ProfileInfo";
import Preferences from "../components/Preferences";

export default function Profile() {
    return (
        <>
            {/* Botones de edición y fondos */}
            <ProfileButtons />
                        
            {/* Información de perfil */}
            <ProfileInfo />
        
            {/* Perefencias */}
            <Preferences />
        </>
    )
}
