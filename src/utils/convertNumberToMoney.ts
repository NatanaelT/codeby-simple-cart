export const convertNumberToMoney = (number: number) => { 
    return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', });
}