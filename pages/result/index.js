import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

function Result() {
    const [result, setResult] = useState({});
    useEffect(() => {
        onMount();
    }, []);

    const onMount = async () => {
        const res = await fetch(
            "https://jigsaw-test-a434d-default-rtdb.firebaseio.com/jigsaw-test.json",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        res.json().then((result) => {
            setResult(result);
        });
    };

    const keys = Object.keys(result);

    return (
        <div className={styles.wrapper}>
            {keys.map((key) => (
                <div key={key} className={styles.row}>
                    <p className={styles.name}>
                        {result[key].name || "not logged"}
                    </p>
                    <p>{result[key].time}</p>
                </div>
            ))}
        </div>
    );
}

export default Result;
