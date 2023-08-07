import React from 'react'


function ProductAdmin() {
    return (
        <div className='lg:ml-[10rem] sm:ml-[5rem] ml-[2rem] h-[100%] animate-fade animate-duration-500'>
            <button type="button" className=' btn btn-primary mt-[70px]'> Agregar producto</button>

        <div className="overflow-x-auto w-[90%]">
            <table className="table text-black mt-5">
                {/* head */}
                <thead>
                <tr className='text-black'>
                    <th></th>
                    <th>Amongus</th>
                    <th>Amongus</th>
                    <th>Amongus</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>Amongus</th>
                    <td>Amongus</td>
                    <td>Amongus</td>
                    <td>Amongus</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th>Amongus</th>
                    <td>Amongus</td>
                    <td>Amongus</td>
                    <td>Amongus</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>Amongus</th>
                    <td>Amongus</td>
                    <td>Amongus</td>
                    <td>Amongus</td>
                </tr>
                </tbody>
            </table>
            </div>

        </div>
    )
    }

export default ProductAdmin