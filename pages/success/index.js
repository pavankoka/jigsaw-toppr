import React, { useEffect } from "react";
import styles from "./index.module.scss";

function Success() {
    let time;

    useEffect(() => {
        time = localStorage.getItem("time_taken");
    }, []);
    return (
        <div className={styles.wrapper}>
            <h1>Congratulations!</h1>
            <h2>{`You've submitted the the jigsaw in ${time}`}</h2>
        </div>
    );
}

export default Success;
