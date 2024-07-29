import {v4 as uuidv4} from 'uuid'
import {useState, useRef} from 'react'
import styles from './FormAddUslugi.module.css';



const FormAddUslugi = ({addUslugi}) => {

    const [newUsluga, setNewUsluga] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const refTypeAuto = useRef()


    const newUslugaHandler = (e) => {
        setNewUsluga(e.target.value)
    }

    const newPriceHandler = (e) => {
        setNewPrice(e.target.value)
    }

    const addUsluga = (event) => {
        event.preventDefault();
        if (!newUsluga.trim()) return
        if (!newPrice.trim()) return

        // console.log(myRef.current.value)

        const usluga = {
            id: uuidv4(),
            type: refTypeAuto.current.value,
            title: newUsluga,
            price: +newPrice,
            isDelete: false
        }


        addUslugi(usluga)
        setNewUsluga('')
        setNewPrice('')
    }

    return <div className={styles.myform}>
        <h1>Добавить услугу</h1>
        <form onSubmit={addUsluga}>
            <input name='usluga' placeholder='Услуга' value={newUsluga} onChange={newUslugaHandler} type='text'/>
            <input name='price' placeholder='Цена' value={newPrice} onChange={newPriceHandler} type='number' min={0}/>
            <select name='type_auto' ref={refTypeAuto}>
                <option value='type_auto_1'>Седан</option>
                <option value='type_auto_2'>Внедорожник</option>
                <option value='type_auto_3'>Коммерческий</option>
            </select>
            <button type='submit'>Добавить</button>
        </form>
    </div>
}

export default FormAddUslugi;