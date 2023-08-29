import React from "react";
import { AiFillDelete } from "react-icons/ai";
import ProductRow from "../../components/Admin/ProductRow";
import ProductModal from "../../components/Admin/ProductModal";
import ProductHeader from "../../components/Admin/ProductHeader";

// Css
import "../../css/productsTable.css";
import DeleteModal from "../../components/Admin/ProductDeleteModal";

function ProductAdmin() {
  const main_dish = [
    { id: 1, name: "Producto 1", img: "image1.jpg", price: 10.99 },
    { id: 2, name: "Producto 2", img: "image2.jpg", price: 19.99 },
    { id: 3, name: "Producto 3", img: "image3.jpg", price: 12.99 },
    // ... aquí es de agregar mas productos ...
  ];

  const side_dish1 = [

  ];

  const side_dish2 = [];

  const accompaniement = [
    { id: 4, name: "Producto 4", img: "image4.jpg", price: 10.99 },
  ];

  const drink = [

  ];

  return (
    <div className="lg:ml-[10rem] mb-10 sm:ml-[2rem] md:ml-[5rem] ml-[1rem] h-[100%] animate-fade animate-duration-500">
      {/* ------- El modal se abre con el metodo ID.showModal() ----------*/}
      <button
        className="btn btn-primary mt-[48px] sm:ml-[36px] sm:mt-[150px]"
        onClick={() => window.product_modal_1.showModal()}
      >
        Agregar producto
      </button>
      <ProductModal
        ModalId="product_modal_1"
        ModalTypebtn="Subir producto"
        ModalType="Agrega cualquier tipo de producto"
      />

      {/* ------------- FIN DEL MODAL ------------ */}


      {/************************************************/}
      {/* ------------Almuerzos/Desayunos------------- */}
      {/************************************************/}

      <h3 className="my-7 text-center text-terc font-bold text-2xl">
        {" "}
        Almuerzos/Desayunos{" "}
      </h3>

      <div id="MainDishCont" className={accompaniement.length === 0 ? "hidden" : ""}>
        <div className="flex items-center w-[95%] justify-center">
          <div className="container">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <thead className="text-white">
                {main_dish.map((main_dish, id) => (
                  // Encabezado de la tabla para cada producto
                  <ProductHeader key={id} />
                ))}
              </thead>
              <tbody className="flex-1 sm:flex-none text-[#414141]">
                {main_dish.map((main_dish, id) => (
                  <ProductRow
                    key={id}
                    id={main_dish.id}
                    ProductNum={main_dish.id}
                    ProductItem={main_dish.name}
                    ProductIMG={main_dish.img}
                    ProductPrice={main_dish.price}
                  />
                ))}

                <ProductModal
                  ModalId="product_modal_2"
                  ModalTypebtn="Guardar cambios"
                  ModalType="Actualiza un producto ya existente"
                />
                <DeleteModal />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/************************************************/}
      {/* ---------------Acompañamientos-------------- */}
      {/************************************************/}

      <div id="AcompCont" className={accompaniement.length === 0 ? "hidden" : ""}>
        <h3 className="my-7 text-center text-terc font-bold text-2xl ">
          {" "}
          Acompañamientos{" "}
        </h3>

        <div className="flex items-center w-[95%] justify-center">
          <div className="container">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <thead className="text-white">
                {accompaniement.map((accompaniement, id) => (
                  // Encabezado de la tabla para cada producto
                  <ProductHeader key={id} />
                ))}
              </thead>
              <tbody className="flex-1 sm:flex-none text-[#414141]">
                {accompaniement.map((accompaniement) => (
                  <ProductRow
                    key={accompaniement.id}
                    ProductNum={accompaniement.id}
                    ProductItem={accompaniement.name}
                    ProductIMG={accompaniement.img}
                    ProductPrice={accompaniement.price}
                  />
                ))}

              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/************************************************/}
      {/* ------------------BEBIDAS------------------- */}
      {/************************************************/}


      <div id="DrinkCont" className={drink.length === 0 ? "hidden" : ""}>

        <h3 className="my-7 text-center text-terc font-bold text-2xl">
          {" "}
          Bebidas{" "}
        </h3>

        <div className="flex items-center w-[95%] justify-center">
          <div className="container">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <thead className="text-white">
                {drink.map((drink) => (
                  // Encabezado de la tabla para cada producto
                  <ProductHeader />
                ))}
              </thead>
              <tbody className="flex-1 sm:flex-none text-[#414141]">
                {drink.map((drink) => (
                  <ProductRow
                    key={drink.id}
                    ProductNum={drink.id}
                    ProductItem={drink.name}
                    ProductIMG={drink.img}
                    ProductPrice={drink.price}
                  />
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>


      {/************************************************/}
      {/* ----------------SIDE DISH1------------------ */}
      {/************************************************/}



      <div id="SideDish1Cont" className={side_dish1.length === 0 ? "hidden" : ""}>

        <h3 className="my-7 text-center text-terc font-bold text-2xl">
          {" "}
          Complemento 1{" "}
        </h3>

        <div className="flex items-center w-[95%] justify-center">
          <div className="container">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <thead className="text-white">
                {side_dish1.map(() => (
                  // Encabezado de la tabla para cada producto
                  <ProductHeader />
                ))}
              </thead>
              <tbody className="flex-1 sm:flex-none text-[#414141]">
                {side_dish1.map((side_dish1) => (
                  <ProductRow
                    key={side_dish1.id}
                    ProductNum={side_dish1.id}
                    ProductItem={side_dish1.name}
                    ProductIMG={side_dish1.img}
                    ProductPrice={side_dish1.price}
                  />
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/************************************************/}
      {/* ----------------SIDE DISH2------------------ */}
      {/************************************************/}



      <div id="SideDish2Cont" className={side_dish2.length === 0 ? "hidden" : ""}>

        <h3 className="my-7 text-center text-terc font-bold text-2xl">
          {" "}
          Complemento 2{" "}
        </h3>

        <div className="flex items-center w-[95%] justify-center">
          <div className="container">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <thead className="text-white">
                {side_dish2.map(() => (
                  // Encabezado de la tabla para cada producto
                  <ProductHeader />
                ))}
              </thead>
              <tbody className="flex-1 sm:flex-none text-[#414141]">
                {side_dish2.map((side_dish2) => (
                  <ProductRow
                    key={side_dish2.id}
                    ProductNum={side_dish2.id}
                    ProductItem={side_dish2.name}
                    ProductIMG={side_dish2.img}
                    ProductPrice={side_dish2.price}
                  />
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>



      {/* FIN DE ESTA COSA */}
    </div>



  );
}

export default ProductAdmin;
