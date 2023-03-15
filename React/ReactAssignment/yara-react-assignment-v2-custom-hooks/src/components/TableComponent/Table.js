import classes from './Table.module.css';

const Table = ({ firstColumn, secondColumn, thirdColumn, numberColumn }) => {
    const tableData = [
        { firstTd: 'Bulgaria', secondTd: 'Winter', thirdTd: 'Corn', numberTd: '7' },
        { firstTd: 'Germany', secondTd: 'Summer', thirdTd: 'Bean', numberTd: '7' },
        { firstTd: 'Thailand', secondTd: 'Rainy', thirdTd: 'Rice', numberTd: '7' }
    ];

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
                    <tr>
                        <td>{td.firstTd}</td>
                        <td>{td.secondTd}</td>
                        <td>{td.thirdTd}</td>
                        <td>{td.numberTd}</td>
                    </tr>
                ))}
                <tr>
                    <td>Bulgaria</td>
                    <td>Summer</td>
                    <td>Sunflower</td>
                    <td>35</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
