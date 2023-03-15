import classes from './Table.module.css';
import { tableData } from '../../data/tableData';

const Table = ({ firstColumn, secondColumn, thirdColumn, numberColumn }) => {
    

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    <th>{firstColumn}</th>
                    <th>{secondColumn}</th>
                    <th>{thirdColumn}</th>
                    <th>{numberColumn}</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((td) => (
                    <tr key={td.id}>
                        <td>{td.firstTd}</td>
                        <td>{td.secondTd}</td>
                        <td>{td.thirdTd}</td>
                        <td>{td.numberTd}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
