import './App.css';

import {useState} from 'react'
import FormAddUslugi from './components/FormAddUslugi'
import ListUslugi from "./components/ListUslugi";
import bigData from "./dataPrice";

function App() {

    const [uslugi, setUslugi] = useState(bigData)

    const addUslugiHandler = (usluga) => {
        setUslugi(
            [usluga, ...uslugi]
        )
    }

    const delUslugaHandler = (id) => {
        const newArray = uslugi.filter(usluga => usluga.id !== id)
        setUslugi(newArray)
    }

    return (
        <>
            <h1>Шиномонтаж Баланс</h1>
            <FormAddUslugi addUslugi={addUslugiHandler}/>
            <ListUslugi uslugi={uslugi} delUsluga={delUslugaHandler}/>
        </>
    );
}

export default App;
