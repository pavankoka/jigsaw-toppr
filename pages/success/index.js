import React from "react";
import styles from "./index.module.scss";

function Success() {
    const time = localStorage.getItem("time_taken");
    return (
        <div className={styles.wrapper}>
            <h1>Congratulations!</h1>
            <h2>{`You've submitted the the jigsaw in ${time}`}</h2>
        </div>
    );
}

export default Success;
