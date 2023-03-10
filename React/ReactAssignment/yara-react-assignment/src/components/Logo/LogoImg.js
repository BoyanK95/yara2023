import { Fragment } from "react";
import classes from './LogoImg.module.css'

const LogoImg = () => {
    return (
        <Fragment>
                <img className={classes.logoImg} src='https://images.squarespace-cdn.com/content/v1/5e6b8563380ccc4e4fd26a4f/1585092940660-7D6MJT52H2QZCYN5AI8I/Web-Blue-Yara.png' alt='logo' />
        </Fragment>
    );
};

export default LogoImg