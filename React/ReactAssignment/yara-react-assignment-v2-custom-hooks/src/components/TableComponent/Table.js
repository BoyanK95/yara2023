import classes from './Table.module.css'

const Table = ({firstColumn, secondColumn, thirdColumn, numberColumn}) => {
    // const tableData = ['Bulgaria' , 'Winter', 'Corn', 'Germany', 'Summer', 'Bean', 'Thailand', 'Rainy', 'Rice']

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
                    <td>
                        35
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
                    <td>
                        3
                    </td>
                </tr>
                <tr>
                    <td>
                        Thailand
                    </td>
                    <td>
                        Rainy
                    </td>
                    <td>
                        Rice
                    </td>
                    <td>
                        177
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
