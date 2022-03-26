import styles from "./button.module.css"

interface ButtonProps{
    value : String
}

export default function Button(props: ButtonProps){
    return (
        <>
            <button className={styles.button}>{props.value}</button>
        </>
    );
}