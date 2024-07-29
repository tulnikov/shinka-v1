import bigData from "./dataPrice";


import {useState} from 'react'
import FormAddUslugi from './components/FormAddUslugi'
import ListUslugi from "./components/ListUslugi";
import FilterUslug from "./components/FilterUslug";


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

    const filterUslugHandler = (text) => {
        const newUslugi = bigData.filter(usluga => usluga.title.toLowerCase().includes(text.toLowerCase()))

        setUslugi(newUslugi)
    }

    return (
        <>
            <FormAddUslugi addUslugi={addUslugiHandler}/>
            <FilterUslug bigFilterUslug={filterUslugHandler}/>
            <ListUslugi uslugi={uslugi} delUsluga={delUslugaHandler}/>
        </>
    );
}

export default App;
