import {useState} from 'react'

import FormAddUslugi from './components/FormAddUslugi'
import './App.css';

function App() {

    const [uslugi, setUslugi] = useState([])

    const addUslugiHandler = (usluga) => {
        setUslugi(
            [usluga, ...uslugi]
        )
    }


    return (
        <>
            <h1>Hello from ShinkaApp-v1</h1>
            <FormAddUslugi addUslugi={addUslugiHandler}/>
        </>
    );
}

export default App;
