import {FaQuestion} from 'react-icons/fa'
import classes from './Table.module.css'

const Table = () => {
    return (
        <table className={classes.table}>
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
                {/* <tr>
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
                </tr> */}
            </tbody>
            <tfoot>
                <tr>
                    <td className='last-td-row'>Almonds Generic</td>
                    <td className='last-td-row'>Yes</td>
                    <td className='last-td-row'>No</td>
                    <td className='last-td-row'>
                        <FaQuestion />
                    </td>
                    <td className='last-td-row' id='actions-td'>
                        ...
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default Table;
