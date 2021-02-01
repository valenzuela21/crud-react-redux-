import React from 'react';
import {useHistory} from "react-router-dom";
//Redux
import {useDispatch} from "react-redux";
import {deleteProductAction, getProductEditAction} from "../../actions/productsActions";

import Swal from "sweetalert2";

const Product = ({products}) => {
    const {name, pressing, id} = products;

    const dispatch = useDispatch();
    const history = useHistory();

    //Confirm Delete
    const confirmDeleteProduct = id =>{

        //Question User
        Swal.fire({
            title: 'Deseas Eliminar?',
            text: 'Estos datos no se podrán recuperar si lo eliminas.',
            icon: 'warning',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Si eliminar`,
            denyButtonText: `No eliminar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //Next action Process
                dispatch(deleteProductAction(id));
                Swal.fire('Se ha eliminado correctamente.', '', 'success')
            }
        })



    }

    //Function redirect edit
    const  redirectEdit =  product =>{
            dispatch(getProductEditAction(product))
            history.push(`/products/edit/${product.id}`)
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> $ {pressing}</span></td>
            <td className="acciones">
                <button type="button" onClick={()=>redirectEdit(products)} className="btn btn-primary mr-2" >
                    Editar
                </button>
                <button
                    type="buttom"
                    className = "btn btn-danger"
                    onClick={()=> confirmDeleteProduct(id)}
                >
                    Borrar
                </button>
            </td>
        </tr>);
}

export default Product;
