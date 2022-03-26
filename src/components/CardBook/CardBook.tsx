import styles from "./cardBook.module.css"
import Button from "../Button/"

interface CardBooksProps {
    imgSrc : string,
    title : string,
    synopsis: string
}

export default function CardBook(props : CardBooksProps){
    return (
        <section className={styles.card}>
            <img src={props.imgSrc} alt="Mamão" />
            <h3>{props.title}</h3>
            <span>{props.synopsis}</span>
            <Button value="Download PDF"/>
        </section>
    );
}