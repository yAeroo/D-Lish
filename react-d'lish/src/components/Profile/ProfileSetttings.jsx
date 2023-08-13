
// Icons
import { MdLockOutline } from "react-icons/md";

export default function ProfileSetttings() {
    return (
        <>
            <div className="mb-10 fa-custom animate-fade"> 
                <div className="w-9/12 m-auto ">
                    <div>
                        <li className="li-elem !mb-4">
                            <MdLockOutline size={"25"} />
                            <div className="flex justify-between w-full">
                                <span className="px-2 overflow-ellipsis w-[13.5rem] sm:w-full overflow-hidden">
                                    Cambiar contraseña
                                </span>
                            </div>
                        </li>

                        <div className="flex justify-center items-center flex-col">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Coloca tu contraseña actual</span>
                                </label>
                                <input type="password" placeholder="●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                            </div>

                            <div className="form-control w-full max-w-xs mt-5">
                                <label className="label">
                                    <span className="label-text">Coloca tu nueva contraseña</span>
                                </label>
                                <input type="password" placeholder="●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                            </div>

                            <div className="form-control w-full max-w-xs mt-5">
                                <label className="label">
                                    <span className="label-text">Confirma tu nueva contraseña</span>
                                </label>
                                <input type="password" placeholder="●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
