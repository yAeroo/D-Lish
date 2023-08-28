import Carrousel from "../components/Carrousel";
import "../css/IndexPage.css";
import "../components/Nav/NavMobileIndex";
import NavIndex from "../components/Nav/NavIndex";

//Imagenes
import Burrito from "/src/assets/index/burrito.jpg";
import JugosNaturales from "/src/assets/index/jugosNaturales.jpg";
import Pupusas from "/src/assets/index/pupusas.jpg";
import Tortas from "/src/assets/index/Tortas.jpg";
import PolloAsado from "/src/assets/index/polloAsado.jpg";
import almuerzoWall from "/src/assets/index/lunchWall.jpg";
import desayunoWall from "/src/assets/index/desayunoWall.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavMobileIndex from "../components/Nav/NavMobileIndex";
import FoodCard from "../components/FoodCard";
import CategoryCard from "../components/CategoryCard";

export default function Index() {
  return (
    <main>

      {/* NavBar Flotante */}
      <div className='absolute w-full z-10'>
        <NavIndex />
      </div>

      <NavMobileIndex />

      {/* Slider de cafeterias */}
      <Carrousel />

      <section className="p-6 bg-base-100 w-full space-y-6">
        {/* ----Espacio para diferentes tipos de comidas----  */}
        <div className="space-y-6 px-1">
          <h2 className="text-3xl md:text-5xl md:text-center font-semibold text-neutral-100 py-2">
            Categorías
          </h2>

          <div className="flex gap-4 flex-wrap place-content-between p-0 lg:px-24">
            {/*  */}
            <CategoryCard name="Almuerzos" img={almuerzoWall} url="/homepage" />
            <CategoryCard name="Desayunos" img={desayunoWall} url="/homepage" />
          </div>
        </div>
      </section>

      <section className="lg:rounded-2xl 2xl:px-[12rem] bg-base-200 pb-10 my-[4rem]">
        <h2 className="text-3xl md:text-5xl font-bold drop-shadow-2xl py-8 px-8 md:text-center">
          Lo más vendido
        </h2>

        {/* Props del apartado de comidas  */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:mx-[6rem] gap-4 md:gap-8 xl:gap-12 px-8">
          <FoodCard name="Pupusas" photo={Pupusas} cafetin="Don Bosco" precio="1.00" categoria="Desayunos" />

          <FoodCard name="Burrito de Carne" photo={Burrito} cafetin="Maria Auxiliadora" precio="2.50" categoria="Almuerzos" />

          <FoodCard name="Jugos Naturales" photo={JugosNaturales} cafetin="Don Bosco" precio="0.25" categoria="Otros" />

          <FoodCard name="Pupusas" photo={Pupusas} cafetin="Miguel Magone" precio="1.00" categoria="Desayunos" />

          <FoodCard name="Pollo Asado" photo={PolloAsado} cafetin="Maria Auxiliadora" precio="2.50" categoria="Almuerzos" />

          <FoodCard name="Tortas" photo={Tortas} cafetin="Don Bosco" precio="2.50" categoria="Almuerzos" />
        </div>



      </section>


    </main>
  );
}
