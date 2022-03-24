export default class Produto{
    #imagem
    #titulo
    #sinopse

    constructor(imagem, titulo, sinopse){
        this.#imagem = imagem;
        this.#titulo = titulo;
        this.#sinopse = sinopse;
    }

    get imagem(){
        return this.#imagem;
    }

    get titulo(){
        return this.#titulo;
    }

    get sinopse(){
        return this.#sinopse;
    }
}