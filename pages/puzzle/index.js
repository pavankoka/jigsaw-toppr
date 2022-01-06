import React from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import styles from "./index.module.scss";

function Puzzle() {
    return (
        <div className={styles.wrapper}>
            <JigsawPuzzle
                imageSrc={
                    "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                }
                rows={4}
                columns={4}
                onSolved={() => alert("Solved!")}
            />
        </div>
    );
}

export default Puzzle;