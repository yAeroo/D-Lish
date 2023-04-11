import { Link } from 'react-router-dom';
import { AiFillEdit } from "react-icons/ai";
import Card from '../components/Card'

export default function Profile() {
    return (
        <>
            <section id="profile" className="min-h-screen bg-[url('img/banner.jpg')] bg-cover flex items-end justify-center pt-40">
                <article id="profile-info" className="bg-white h-[80vh] sm:w-10/12 w-full sm:rounded-t-3xl p-5 shadow-black shadow-lg transition-all">
                    <div id="profile-pic" className="w-full flex justify-center">
                        <img src="/img/example-pfp.jpg" className="-mt-28 w-52 h-52 lg:w-60 lg:h-60 rounded-full border-8 border-solid border-white transition-all" alt='profile-pic'/>
                    </div>

                    <div id="edit-bttn" className="relative">
                        <Link to="/profile/settings" className="absolute -top-20 lg:-top-28 left-[85%] md:left-[70%] xl:left-[82%] flex md:w-48 items-center justify-center bg-prim p-2 rounded-full">
                            <span className='hidden md:block text-lg font-bold font-plane text-white transition-all'>Editar perfil</span><span className='sm:mx-2'><AiFillEdit size={'30'} color={'white'}/></span>
                        </Link>
                    </div>

                    <div id="profile-name" className="my-5">
                        <p className="font-title text-4xl md:text-5xl text-center font-bold tracking-wide transition-all">Hola hola hola</p>
                    </div>
                </article>
            </section>
        </>
    )
}

