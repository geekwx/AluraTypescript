import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociao: Negociacao) {
        this.negociacoes.push(negociao);
    }
    lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}