export function inspect(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            const retorno = metodoOriginal.apply(this, args);
        console.log(`--- Método ${ propertyKey}`)
        console.log(`------ parametro: ${JSON.stringify(args)}`)
        console.log(`------ retorno : ${JSON.stringify(retorno)}`)

            
            return retorno;
        }
        return descriptor;
    }
}

/*
-> Esqueleto para qualquer funcado decorator
export function inspect(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        }
        return descriptor;
    }
}






*/