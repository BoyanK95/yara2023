import { Fragment } from 'react';
import SideNavbar from './SideNavBar/SideNavbar';
import TopHeader from './TopHeader/TopHeader';

const Layout = ({children}) => {
    return (
        <Fragment>
            <TopHeader />
            <SideNavbar />
            <main>{children}</main>
        </Fragment>
    );
};

export default Layout
