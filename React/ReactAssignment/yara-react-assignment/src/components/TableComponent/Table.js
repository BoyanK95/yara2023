const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Crop</th>
                    <th>Pre-crop</th>
                    <th>Post-crop</th>
                    <th>Last mod.</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a href='#'>Search</a>
                    </td>
                    <td>
                        <a href='#'>Search</a>
                    </td>
                    <td>
                        <a href='#'>Search</a>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td class='last-td-row'>Almonds Generic</td>
                    <td class='last-td-row'>Yes</td>
                    <td class='last-td-row'>No</td>
                    <td class='last-td-row'>
                        <img src='./assets/questionmark.png' alt='questionmark' />
                    </td>
                    <td class='last-td-row' id='actions-td'>
                        ...
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default Table;
