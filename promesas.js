let dividBien = (num1, num2) => {
    return new Promise ((resolve, reject) => {
        let resultado
        if(num2===0){
            resultado = reject('no se puede')
        }else{
            resultado = resolve(num1 / num2)
        }
        return resultado
    }
    )   
}