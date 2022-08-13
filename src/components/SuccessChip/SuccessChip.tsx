import styles from './SuccessChip.module.css'

interface SuccessChipProps {
    text: string
}

export const SuccessChip = ({ text }: SuccessChipProps) => {
    return (
        <span className={styles.chipContainer}>
            <p className={styles.chipText}>{text}</p>
        </span>
    )
}