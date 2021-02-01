import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getEditProductAction} from "../../actions/productsActions";
import {useHistory} from "react-router-dom";

const editProducts = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [product, saveProduct] = useState({
        name: '',
        pressing: '',
    })

    //Product Editar
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const productEdit = useSelector(state => state.products.productEdit);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
            saveProduct(productEdit)
    },[productEdit])

    //Read Data Form
    const onChangeForm =  e =>{
        saveProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const {name, pressing} = product;


    const submitEditProduct = (e) =>{
            e.preventDefault();
            dispatch(getEditProductAction(product));
            history.push("/");

    }

    return(<div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weigth-bold">
                        Editar Nuevo Producto
                    </h2>

                    <form
                        onSubmit={submitEditProduct}
                    >
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Nombre del Producto"
                                className="form-control"
                                onChange={onChangeForm}
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio Producto</label>
                            <input
                                type="text"
                                name="pressing"
                                value={pressing}
                                placeholder="Precio del Producto"
                                className="form-control"
                                onChange={onChangeForm}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Modificar Datos
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)

}
export default editProducts;
