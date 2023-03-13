import LogoImg from '../../Logo/LogoImg';
import classes from './TopHeader.module.css';

const TopHeader = () => {
    return (
        <header>
            <div className={classes.background}>
                <LogoImg />
            </div>
        </header>
    );
};

export default TopHeader;
