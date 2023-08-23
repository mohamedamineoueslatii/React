import React, {useState} from 'react'
import {  connect } from 'react-redux'
import {addBook, deleteAllBooks, deleteBook} from '../redux/actions/actionAddBooks'
import FlipMove from 'react-flip-move'



const AddBooks = ({libraryData, addBook, deleteBook,deleteAll})=> {
    console.log(libraryData)
    const initialState = {
        title: '',
        author: ''
    }

    const [newData, setNewData] = useState(initialState);


    const handleSubmit = e => {
        e.preventDefault();
        console.log(newData);
        addBook(newData)

        // Vider le input
        setNewData(initialState)
    }

const displayData = libraryData.length >0 ? 
        <FlipMove>
        {
            libraryData.map(data => {
                return (
                    <li key={data.id} className='list-group-item list-group-item-light d-flex justify-content-between'>
                        <span><strong>Titre : </strong>{data.title}</span>
                        <span><strong>Auteur : </strong>{data.author}</span>
                        <span className="btn btn-danger" onClick={()=> deleteBook(data.id)}>x</span>
                    </li>
                )
            })
        }
        </FlipMove>
        :
        <p className="text-center">Aucune data</p>

const deleteAllBooksBtn = libraryData.length > 0 && 
        <div className="d-flex justify-content-center">
            <button className="btn btn-danger mt-4 mb-5" onClick={()=>(deleteAll()) }>
                Effacer tous les livres
            </button>
        </div>


    return (
        <main role="main">
            <div className="jumbotron jumotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">BOOKS</h1>
                    <p>Ajouter un livre a votre bibliotheque</p>

                    <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input  type="text" className="form-control" 
                                    placeholder='Titre' required
                                    onChange={e=>setNewData({...newData, title: e.target.value})}
                                    value={setNewData.title}/>
                        </div>
                        <div className='form-group'>
                            <input  type="text" className="form-control ml-3" 
                                    placeholder='Auteur' required
                                    value={setNewData.author}
                                    onChange={e=> setNewData({...newData, author : e.target.value})}/>
                        </div>
                        <div className='form-group'>
                            <button className="btn btn-outline-secondary ml-3">Ajouter un livre</button>
                        </div>
                    </form>


                </div>
            </div>
            <div className="container" style={{minHeight:'200px'}}>
                <div className='row'>
                    <div className='col-md-12'>
                        <ul className='list-group'>
                        {displayData}

                        </ul>
                       {deleteAllBooksBtn}
                    </div>
                 
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        libraryData: state.library
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBook: param => dispatch(addBook(param)),
        deleteBook : id => dispatch(deleteBook(id)), 
        deleteAll : ()=> dispatch(deleteAllBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks)
