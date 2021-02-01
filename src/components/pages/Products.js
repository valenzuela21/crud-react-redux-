import React, {Fragment, useEffect} from 'react';

//Redux
import {useSelector, useDispatch} from "react-redux";
import {getProductAction} from "../../actions/productsActions";
import Product from "./Product";


const Products = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{

        const loaderProducts = () => dispatch(getProductAction());

        loaderProducts();
        // eslint-disable-next-line
    },[]);

    //Get products redux
     const products = useSelector(state => state.products.products);
     const error = useSelector(state => state.products.error);
     const cargando = useSelector(state => state.products.loading);

     let results;
     products === undefined? results = [] : results = products;

    return (<Fragment>
        <h2 className="text-center my-5">
            Lista Productos
        </h2>

        {error ? <p className="front-weight-bold alert alert-danger text-center mt-4" >
            Hubo un error en la consulta
        </p> : null}

        {cargando ?<p className="text-center"> Cargando... </p> : null}

        <table className="table table-striped">
            <thead className="bg-primary table-dark">
                <tr>
                    <th scope="col" >Nombre</th>
                    <th scope="col" >Precio</th>
                    <th scope="col" >Acciones</th>
                </tr>
            </thead>
            <tbody>
            {results.length === 0 ? "No hay resultados" : (
             results.map(product => (
                 <Product
                     key={product.id}
                     products={product}
                 />
             ))
            )}
            </tbody>
        </table>
    </Fragment>)
}

export default  Products;
