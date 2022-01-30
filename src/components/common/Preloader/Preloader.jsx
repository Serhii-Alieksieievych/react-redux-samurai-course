import { Grid } from 'svg-loaders-react';
import classes from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <Grid />
        </div>
    )
}

export default Preloader;