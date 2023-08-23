import { ADD_BOOKS, DELETE_ALL_BOOKS, DELETE_BOOK } from "../constantes";

export const addBook = data =>{
    return {
        type : ADD_BOOKS, 
        payload : data //object
    }
}


export const deleteBook = id =>{
    return {
        type : DELETE_BOOK, 
        payload : id
    }
}

export const deleteAllBooks = () =>{

    return {
        type : DELETE_ALL_BOOKS
    }
}