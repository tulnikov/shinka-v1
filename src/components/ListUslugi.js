import styles from './ListUslugi.module.css';
import {MdDeleteForever} from "react-icons/md";

const ListUslugi = ({uslugi, delUsluga}) => {
    const typeAuto = {
        'type_auto_1': 'Легковой',
        'type_auto_2': 'Внедорожник',
        'type_auto_3': 'Коммерческий',
    }
    return <>
        <table className={styles.table}>
            <thead>
            <tr>
                <td>#</td>
                <td>Услуга</td>
                <td>Тип авто</td>
                <td>Диаметр</td>
                <td>Цена</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {uslugi.map((item) => (
                    <tr key={item.id} className={styles.row}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{typeAuto[item.type]}</td>
                        <td>{item.diameter}</td>
                        <td>{item.price}</td>
                        <td><MdDeleteForever onClick={() => delUsluga(item.id)}/></td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    </>
}
export default ListUslugi;