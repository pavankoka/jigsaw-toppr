import React, { useEffect } from "react";

function Result() {
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
        console.log(res.json());
    };

    return <div></div>;
}

export default Result;
