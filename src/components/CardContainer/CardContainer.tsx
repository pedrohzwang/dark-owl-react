import CardBook from "../CardBook/";
import bookList from "../data/listaLivros";
import styles from "./cardContainer.module.css"

function carregarListaProdutos(){
    return bookList.map(livro => {
      return <CardBook imgSrc={livro.imagem} title={livro.titulo} synopsis={livro.sinopse} ></CardBook>
    })
}

export default function CardContainer(){
    return (
        <div className={styles.cardContainer}>
        {carregarListaProdutos()}
      </div>
    )
}