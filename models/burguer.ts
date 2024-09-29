
// receber o objeto dos nossos hamburguers - nome, foto, preço e a descrição deles. Usado interface ao inves de classe, pois neste caso nao interessa criar metodos e nem o construtor, só queremos definir uma estrutura, que é definido por interface(por convenção) ou type.

export default interface IBurguer {
    image: string;
    name: string;
    price: number;
    description: string;
};