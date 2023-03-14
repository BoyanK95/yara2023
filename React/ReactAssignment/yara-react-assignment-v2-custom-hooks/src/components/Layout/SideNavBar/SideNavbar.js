import { NavLink } from 'react-router-dom';
import { FaTable, FaWpforms } from 'react-icons/fa';
import classes from './SideNavbar.module.css';

const SideNavbar = () => {
    return (
        <div className={classes.sidebar}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/form'>
                            <div>
                                <FaWpforms />
                                <p>From</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/table'>
                            <div>
                                <FaTable />
                                <p>Table</p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNavbar;
