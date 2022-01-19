import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

function Result() {
    const [result, setResult] = useState({});
    const [sortedKeys, setSortedKeys] = useState([]);

    useEffect(() => {
        onMount();
    }, []);

    function getTime(str) {
        const minsI = str.search(/mins/);
        const secsI = str.search(/secs/);
        const mins = parseInt(str.substring(0, minsI), 10);
        const secs = parseInt(str.substring(minsI + 5, secsI), 10);

        return mins * 60 + secs;
    }

    function sortKeys(result) {
        const keys = Object.keys(result);
        keys.sort(function (a, b) {
            const aTime = getTime(result[a].time);
            const bTime = getTime(result[b].time);

            if (aTime < bTime) {
                return -1;
            } else if (aTime > bTime) {
                return 1;
            } else {
                return 0;
            }
        });
        setSortedKeys(keys);
    }

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
            sortKeys(result);
        });
    };

    return (
        <div className={styles.wrapper}>
            {sortedKeys.map((key) => (
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
