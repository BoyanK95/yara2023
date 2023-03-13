import { NavLink } from 'react-router-dom';
import classes from './SideNavbar.module.css';

const SideNavbar = () => {
    return (
        <div className={classes.sidebar}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/form'>
                            Form
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/table'>
                            Table
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNavbar;
