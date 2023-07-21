
// Icons
import { MdLockOutline } from "react-icons/md";

export default function ProfileSetttings() {
    return (
        <>
            <div className="w-10/12 sm:w-9/12 m-auto mb-10 fa-custom animate-fade">

                <div className="collapse collapse-arrow">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-base font-medium li-elem px-0 !mt-2 mb-4">
                        <MdLockOutline size={"25"} className="self-center" />
                        <div className="flex justify-between w-full ">
                            <span className="px-2 self-center">Cambiar contraseña</span>
                        </div>
                    </div>
                    <div className="collapse-content p-0 mt-2"> 
                        <div className="flex justify-center items-center flex-col">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Coloca tu contraseña actual</span>
                                </label>
                                <input type="password" placeholder="●●●●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                            </div>

                            <div className="form-control w-full max-w-xs mt-5">
                                <label className="label">
                                    <span className="label-text">Coloca tu nueva contraseña</span>
                                </label>
                                <input type="password" placeholder="●●●●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                            </div>

                            <div className="form-control w-full max-w-xs mt-5">
                                <label className="label">
                                    <span className="label-text">Confirma tu nueva contraseña</span>
                                </label>
                                <input type="password" placeholder="●●●●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
