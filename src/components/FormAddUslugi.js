import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'


const FormAddUslugi = ({addUslugi}) => {

    const [newUsluga, setNewUsluga] = useState('')
    const [newPrice, setNewPrice] = useState('')

    const newUslugaHandler = (e) => {
        setNewUsluga(e.target.value)
    }

    const newPriceHandler = (e) => {
        setNewPrice(e.target.value)
    }

    const addUsluga = (event) => {
        event.preventDefault();
        const usluga = {
            id: uuidv4(),
            title: newUsluga,
            price: newPrice,
            isDelete: false
        }


        addUslugi(usluga)
        setNewUsluga('')
        setNewPrice('')
    }

    return <>
        <h1>Add uslugi</h1>
        <form onSubmit={addUsluga}>
            <input name='usluga' placeholder='Usluga' value={newUsluga} onChange={newUslugaHandler}/>
            <input name='price' placeholder='Price' value={newPrice} onChange={newPriceHandler}/>
            <button type='submit'>Add</button>
        </form>
    </>
}

export default FormAddUslugi;