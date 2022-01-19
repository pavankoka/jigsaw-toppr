import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

function Result() {
    const [emails, setEmails] = useState([]);
    const [result, setResult] = useState({});
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        onMount();
    }, []);

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    function getEmails(keys, result) {
        const newEmails = [];
        keys.map((key) => newEmails.push(result[key].email));
        if (newEmails.length) {
            const uniqueEmails = newEmails.filter(onlyUnique);
            setEmails(uniqueEmails);
        }
    }

    const onMount = async () => {
        const res = await fetch(
            "https://jigsaw-test-a434d-default-rtdb.firebaseio.com/login.json",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        res.json().then((result) => {
            setResult(result);
            setKeys(Object.keys(result));
            getEmails(Object.keys(result), result);
        });
    };

    return (
        <div className={styles.wrapper}>
            <p>no of unique emails - {emails.length}</p>
            <p>no of logins - {keys.length}</p>
            {keys.map((key) => (
                <div key={key} className={styles.row}>
                    <p className={styles.name}>
                        {result[key].name || "not logged"}
                    </p>
                    <p>{result[key].email}</p>
                </div>
            ))}
        </div>
    );
}

export default Result;
