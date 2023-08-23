import { v4 as uuiv4 } from 'uuid'
import { ADD_BOOKS, DELETE_ALL_BOOKS, DELETE_BOOK } from '../constantes'

const initialState = {
    books: []
}

const helperAdddata = action => {
    return {
        id: uuiv4(),
        title: action.payload.title,
        author: action.payload.author
    }
}

const removeDataByID = (state,id ) =>{
    const books =  state.filter(book =>  book.id !== id)
    debugger; 
    return books; 
}


// reducer
const reducerAddBooks = ( state = initialState.books, action ) => {

    if (localStorage.getItem('booksData')) {
        state = JSON.parse(localStorage.getItem('booksData'))
    }

    switch (action.type) {
        case ADD_BOOKS:
            state = [...state, helperAdddata(action)]
            localStorage.setItem('booksData', JSON.stringify(state))
            return state; 
            
        case DELETE_BOOK: 
            state = removeDataByID(state, action.payload); 
            localStorage.setItem('bookData', JSON.stringify(state))
            return state; 
        case DELETE_ALL_BOOKS: 
            state = []; 
            localStorage.setItem('bookData', JSON.stringify(state))
            return state; 
        default: return state
    }

}

export default reducerAddBooks