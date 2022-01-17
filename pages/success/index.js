import React, { useState, useEffect } from "react";
import cx from "classnames";
import { isMobile } from "react-device-detect";
import { GoogleLogout } from "react-google-login";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

function Success() {
    const router = useRouter();
    const [time, setTime] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        setTime(localStorage.getItem("time_taken"));
    }, []);

    function onLogoutSuccess() {
        localStorage.clear();
        router.push("/login");
    }

    if (loading) {
        return <p>loading ...</p>;
    }

    return (
        <div className={cx(styles.wrapper, isMobile ? styles.mobile : null)}>
            <h1 className={styles.title}>Congratulations!</h1>
            <h2 className={styles.description}>
                {`You've submitted the the jigsaw in `}{" "}
                <p className={styles.color}>{time}</p>
            </h2>
            <GoogleLogout
                clientId="578651997699-l088ltc2m11cdj4jfgasfml85qcd69m7.apps.googleusercontent.com"
                buttonText="Click here to signout!"
                onLogoutSuccess={onLogoutSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Success;
