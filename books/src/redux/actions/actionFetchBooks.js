import { FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS } from "../constantes"
import axios  from 'axios'

const fetchBooksLoading = () =>{
    return {
        type: FETCH_BOOKS_LOADING
    }
}

const fetBooksSucces = data =>{
    return {
        type : FETCH_BOOKS_SUCCESS, 
        payload : data
    }
}

const fetchBooksError = error =>{
    return {
        type : FETCH_BOOKS_ERROR, 
        payload : error
    }
}
const GOOGLE_API = 'AIzaSyDBZ_M7YKegnYsA4y0XBM7ML_VQ69nF3D0'

export const fetchBooks = title =>{
    return dispatch => {
        dispatch (fetchBooksLoading())
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API}&maxResults=20`)
        .then(res=>{
            dispatch(fetBooksSucces(res.data.items))
        })
        .catch(error => {
            dispatch(fetchBooksError(error.message))
        })
    }
}

