import {useState} from "react";
import {MdDeleteForever} from "react-icons/md";
import styles from './FilterUslug.module.css';


const FilterUslug = ({bigFilterUslug}) => {
    const [filterUslug, setFilterUslug] = useState('')


    const changeFilterUslug = (filterUslug) => {
        setFilterUslug(filterUslug)
        bigFilterUslug(filterUslug)
    }

    return <>
        <form className={styles.filterForm}>
            <input placeholder="Filter Uslug"
                   type="text"
                   value={filterUslug}
                   onChange={e => changeFilterUslug(e.target.value)}/>
            <MdDeleteForever onClick={() => changeFilterUslug('')}/>
        </form>
    </>
}
export default FilterUslug;