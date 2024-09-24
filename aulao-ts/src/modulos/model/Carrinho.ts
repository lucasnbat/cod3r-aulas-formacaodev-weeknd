import ItemCarrinho from "./itemCarrinho"; // export default permite renomear

export interface Carrinho {
    readonly itens: ItemCarrinho[];
    readonly cupom?: number;
    total: number;
    totalComDesconto: number;
}