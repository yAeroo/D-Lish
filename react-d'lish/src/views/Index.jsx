import Carrousel from "../components/Carrousel";
import '../css/index.css'

export default function Index() {
    return (
        <>
            <Carrousel />
            <main>
                <section>
                    {/* --------------Espacio para diferentes tipos de comidas-------------------  */}
                    <div className="bg-accent grid pt-10 pb-10 place-items-center bg-cover bg-center min-h-screen">
                        {/* hero-content */}
                        <div className="flex gap-2">
                            <div className="flex-row gap-2">
                                <div className="food-type bg-[url('../img/desayuno.png')] bg-cover bg-center ">
                                    <h1 className=" text-5xl font-extrabold text-white drop-shadow-4xll"> Desayunos </h1>
                                </div>
                                <div className="food-type bg-[url('../img/Almuerzos.png')] bg-cover bg-center ">
                                    <h1 className="text-5xl font-extrabold text-white drop-shadow-4xll"> Almuerzos </h1>
                                </div>
                            </div>
                            <div className="food-type bg-[url('../img/otros.png')] bg-cover bg-center ">
                                <h1 className="text-5xl font-extrabold text-white drop-shadow-4xll"> Otros </h1>
                            </div>

                        </div>

                        <div>
                            <img src="..\src\assets\logo\icon_bw.png" className="max-w-sm rounded-lg " />
                        </div>
                    </div>

                </section>
                <section>
                    <h2 className=" uppercase text-4xl font-title text-center">Lo más vendido</h2>
                </section>
            </main>
        </>

    );
}
