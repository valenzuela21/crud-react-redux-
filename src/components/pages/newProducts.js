import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

//Actions Redux
import {createNewProduct} from "../../actions/productsActions";
import {showAlertAction, disbleAlertAction} from "../../actions/alertActions";

const newProducts = ({history}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, saveName] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pressing, savepressing] = useState(0);


    //Working useDispatch
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();


    //Access Component Store
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const loader = useSelector(state => state.products.loading);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const error = useSelector(state => state.products.error);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const alert = useSelector(state => state.alerts.alert)

    const addNewProduct = (product) => dispatch(createNewProduct(product));


    const submitNewProduct = e => {
        e.preventDefault();

        // Validate form
        if (name.trim === '' || pressing <= 0) {

            const alert = {
                msg: "Hambos campos son obligatorios",
                classes: "alert alert-danger text-center text-uppercase p3"
            }

            dispatch(showAlertAction(alert));

            return;

        }
        //Never of Errors

        dispatch(disbleAlertAction());

        //Create New Product
        addNewProduct({
            name,
            pressing
        });

        //History redirect
        history.push("/");

    }


    return (<div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weigth-bold">
                        Agegar Nuevo Producto
                    </h2>
                    {alert ? <p className={alert.classes} > { alert.msg } </p> : null}
                    <form
                        onSubmit={submitNewProduct}
                    >
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre del Producto"
                                className="form-control"
                                value={name}
                                onChange={e => saveName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio Producto</label>
                            <input
                                type="text"
                                name="pressing"
                                placeholder="Precio del Producto"
                                className="form-control"
                                value={pressing}
                                onChange={e => Number(savepressing(e.target.value))}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Agregar
                            </button>
                        </div>
                    </form>

                    {loader ? <p> Cargando... </p> : ''}
                    {error ? <p className="alert alert-danger p2 m-4">Hubo un error en la inserción </p> : ''}
                </div>
            </div>
        </div>

    </div>)

}
export default newProducts;
