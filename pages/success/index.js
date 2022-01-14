import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

function Success() {
    const [time, setTime] = useState(null);

    useEffect(() => {
        setTime(localStorage.getItem("time_taken"));
    }, []);

    return (
        <div className={styles.wrapper}>
            <h1>Congratulations!</h1>
            <h2>{`You've submitted the the jigsaw in ${time}`}</h2>
        </div>
    );
}

export default Success;
