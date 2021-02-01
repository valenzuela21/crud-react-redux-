import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOADER_PRODUCTS,
    DOWNLOADER_PRODUCTS_SUCCESS,
    DOWNLOADER_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_ERROR,
    GET_PRODUCT_EDIT,
    START_PRODUCT_EDIT,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_ERROR
} from '../types'

import clientAxios from "../config/axios";
import Swal from 'sweetalert2'

//Create New Products
export function createNewProduct(product) {
    return async (dispatch) => {

        dispatch(addProduct());

        try {
            //Insert Api
            await clientAxios.post('/productos', product)
            //Success Update State
            dispatch(addProductSuccess(product))
            //Alert
            Swal.fire({
                title: 'Correcto',
                text: 'Se agrego correctamente',
                icon: 'success',
                confirmButtonText: 'Ok!'
            })

        } catch (error) {
            dispatch(addProductError(true));
            //Alert Error
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error intenta de nuevo',
                icon: 'error',
                confirmButtonText: 'Ok!'
            })

        }
    }

}

const addProduct = () =>
    ({
        type: ADD_PRODUCT,
        payload: true,
    })

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});

//Consult Products
export function getProductAction() {
    return (dispatch) => {

        dispatch(downloaderProducts())

        try {
            setTimeout(async () => {
                const resp = await clientAxios.get('/productos');
                dispatch(downloaderProductsSuccess(resp.data))
            }, 1000);
        } catch (e) {
            dispatch(downloaderProductsError());
        }

    }

}

const downloaderProducts = () => ({
    type: START_DOWNLOADER_PRODUCTS,
    payload: true
});

const downloaderProductsSuccess = (products) => ({
    type: DOWNLOADER_PRODUCTS_SUCCESS,
    payload: products
});

const downloaderProductsError = () => ({
    type: DOWNLOADER_PRODUCTS_ERROR,
    payload: true
});


//Delete Product
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductsDelete(id));
        try {
            await clientAxios.delete(`/productos/${id}`);
            dispatch(getDeleteProductsSuccess())
        } catch (e) {
            dispatch(getDeleteProductError());
            console.log(e);
        }

    }
}

const getProductsDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const getDeleteProductsSuccess = () => ({
    type: PRODUCT_DELETE_SUCCESS,
});

const getDeleteProductError = () => ({
    type: PRODUCT_DELETE_ERROR,
    payload: true
})

//Edit Product
export function getProductEditAction(product) {
    return (dispatch) => {
        dispatch(getProductEdit(product));
    }
}

const getProductEdit = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product,
})

//Edit Register in Api State

export function getEditProductAction(product){
    return async (dispatch) =>{
        dispatch(getEditNewProduct(product))

        try{
            await clientAxios.put(`/productos/${product.id}`, product)
            dispatch(editProductSuccess(product));
        }catch (e) {
            dispatch(getEditProductError());
            console.log(e);
        }

    }
}

const getEditNewProduct = () => ({
    type: START_PRODUCT_EDIT
});

const editProductSuccess = product => ({
    type: PRODUCT_EDIT_SUCCESS,
    payload: product
})

const getEditProductError = () =>({
    type: PRODUCT_EDIT_ERROR,
    payload: true
})


