import React, { useState, useEffect } from "react";
import cx from "classnames";
import useWindowSize from "../../hooks/useWindowSize";
import Image from "next/image";
import Input from "../../utils/input";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { GoogleLogin } from "react-google-login";

import styles from "./index.module.scss";

function Index() {
    const router = useRouter();
    const size = useWindowSize();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pointerX, setPointerX] = useState(-20);
    const [pointerY, setPointerY] = useState(-20);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    function onMouseMove(e) {
        const newPointerX = e.nativeEvent.offsetX / size.width;
        const newPointerY = e.nativeEvent.offsetY / size.height;
        setPointerX(-newPointerX * 20);
        setPointerY(-newPointerY * 20);
    }

    const handleSuccess = async (res) => {
        const profile = res.profileObj;
        const name = profile.name;
        const email = profile.email;

        if (profile && name && email) {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("timer", 0);

            const res = await fetch(
                "https://jigsaw-test-a434d-default-rtdb.firebaseio.com/login.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                    }),
                }
            );
            router.push("/puzzle");
        }
    };

    if (isLoading) {
        return <p>loding ...</p>;
    }

    return (
        <div className={styles.wrapper}>
            {!isMobile && (
                <div className={styles.image}>
                    <Image
                        src={require("../../public/images/login/login-left-side.png")}
                        alt="login-left-side"
                        objectFit="contain"
                    />
                </div>
            )}
            <div
                className={cx(styles.content, isMobile ? styles.mobile : null)}
            >
                <div className={styles.login}>
                    <p className={styles.title}>PLAY NOW</p>
                    <GoogleLogin
                        isSignedIn={true}
                        clientId="578651997699-l088ltc2m11cdj4jfgasfml85qcd69m7.apps.googleusercontent.com"
                        buttonText="Continue with Google"
                        onSuccess={handleSuccess}
                        onFailure={(res) => console.log("failure", res)}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Index;
