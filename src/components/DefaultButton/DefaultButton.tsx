import React from "react";
import styles from './DefaultButton.module.css'

interface DefaultButtonPros {
    text: string;
    onClick: (event: React.SyntheticEvent) => void;
}

export const DefaultButton = ({ text, onClick }: DefaultButtonPros) => {
    return (
        <button className={styles.defaultButton} onClick={onClick}>{text}</button>
    )
}