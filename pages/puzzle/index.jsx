import React, { useState, useEffect } from "react";
import cx from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import { isMobile } from "react-device-detect";
import { getDatabase, ref, child, get } from "firebase/database";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import styles from "./index.module.scss";

function Puzzle() {
    const router = useRouter();
    const [timer, setTimer] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        if (localStorage.getItem("submitted")) {
            router.push("/success");
        }
        const email = localStorage.getItem("email");
        const name = localStorage.getItem("name");
        if (!name && !email) {
            alert(
                "unable to fetch mail details! please try in incognito mode!"
            );
            router.push("/login");
        }

        const windowTimer = setInterval(() => {
            setTimer((currentTimer) => {
                const updatedTime = parseInt(currentTimer || 0, 10) + 1;
                localStorage.setItem("timer", updatedTime);
                return updatedTime;
            });
        }, 1000);
        setTimer(localStorage.getItem("timer"));

        return () => {
            clearInterval(windowTimer);
        };
    }, []);

    const onSuccess = async () => {
        const email = localStorage.getItem("email");
        const name = localStorage.getItem("name");
        if (!name && !email) {
            alert("unable to submit! please try in incognito mode!");
            return;
        }
        const time = `${parseInt(timer / 60, 10)}mins ${parseInt(
            timer % 60
        )}secs`;

        const res = await fetch(
            "https://jigsaw-test-a434d-default-rtdb.firebaseio.com/jigsaw-test.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    time,
                }),
            }
        );
        localStorage.setItem("submitted", true);
        localStorage.setItem("time_taken", time);
        router.push("/success");
    };

    if (isLoading) {
        return <p>loading ...</p>;
    }

    return (
        <div className={cx(styles.wrapper, isMobile ? styles.mobile : null)}>
            <div className={styles.timer}>
                <p className={styles.digit}>
                    {parseInt(parseInt(timer / 60, 10) / 10, 10) % 10}
                </p>
                <p className={styles.digit}>{parseInt(timer / 60, 10) % 10}</p>
                <p className={styles.pointer}>:</p>
                <p className={styles.digit}>
                    {parseInt(parseInt(timer % 60, 10) / 10, 10) % 10}
                </p>
                <p className={styles.digit}>{(timer % 60) % 10}</p>
            </div>
            <div className={styles.puzzle}>
                <JigsawPuzzle
                    imageSrc="https://images.unsplash.com/photo-1642565619191-4a35030fe9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2488&q=80"
                    rows={5}
                    columns={5}
                    onSolved={onSuccess}
                />
            </div>
            {!isMobile && (
                <div className={styles.preview}>
                    <Image
                        src={require("../../public/images/india-map.png")}
                        objectFit="contain"
                        alt="india map"
                    />
                </div>
            )}
        </div>
    );
}

export default Puzzle;
