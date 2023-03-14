import classes from './Table.module.css'

const Table = () => {
    // const tableData = ['Bulgaria' , 'Winter', 'Corn', 'Germany', 'Summer', 'Bean', 'Thailand', 'Rainy', 'Rice']

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    <th>Region</th>
                    <th>Season</th>
                    <th>Crops</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Bulgaria
                    </td>
                    <td>
                        Summer
                    </td>
                    <td>
                        Sunflower
                    </td>
                </tr>
                <tr>
                    <td>
                        Germany
                    </td>
                    <td>
                        Winter
                    </td>
                    <td>
                        Potato
                    </td>
                </tr>
            </tbody>
            {/* <tfoot>
                <tr>
                    <td className='last-td-row'>Almonds Generic</td>
                    <td className='last-td-row'>Yes</td>
                    <td className='last-td-row'>No</td>
                </tr>
            </tfoot> */}
        </table>
    );
};

export default Table;