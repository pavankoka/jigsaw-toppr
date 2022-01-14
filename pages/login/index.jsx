import React, { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Image from "next/image";
import Input from "../../utils/input";
import { useRouter } from "next/router";
import { GoogleLogin } from "react-google-login";

import styles from "./index.module.scss";

function Index() {
    const router = useRouter();
    const size = useWindowSize();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pointerX, setPointerX] = useState(-20);
    const [pointerY, setPointerY] = useState(-20);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowLogin(true);
        }, 500);
    }, []);

    function onMouseMove(e) {
        const newPointerX = e.nativeEvent.offsetX / size.width;
        const newPointerY = e.nativeEvent.offsetY / size.height;
        setPointerX(-newPointerX * 20);
        setPointerY(-newPointerY * 20);
    }

    function handleSuccess(res) {
        const profile = res.profileObj;
        const name = profile.name;
        const email = profile.email;

        if (profile && name && email) {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("timer", 0);
            router.push("/puzzle");
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image
                    src={require("../../public/images/login/login-left-side.png")}
                    alt="login-left-side"
                    objectFit="contain"
                />
            </div>
            <div className={styles.content}>
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
