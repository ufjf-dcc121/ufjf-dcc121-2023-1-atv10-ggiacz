const store = { estado: [null] };

export function adicionar(valor){
    store.estado.push(valor);
}

export function get_itens(){
    return [...store.estado];
}

export function remover(){
    store.estado.pop();
}