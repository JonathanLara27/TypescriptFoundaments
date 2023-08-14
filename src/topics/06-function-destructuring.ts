
export interface Product {
    desc: string;
    price: number;
}

// const phone: Product ={
//     desc: 'Nokia A1',
//     price: 150.00
// }

// const tablet: Product ={
//     desc: 'iPad Air',
//     price: 350.00
// }

interface IgvCalculationOptions{
    igv: number;
    products: Product[];
}

export function igvCalculation(options: IgvCalculationOptions): [number,number] {
    const {igv, products} = options;
    let total=0;
    products.forEach(({price})=>{
        total+=price;
    })
    return [total, total*igv]
}

// function igvCalculation({igv,products}: IgvCalculationOptions): [number,number] {
//     let total=0;
//     products.forEach(({price})=>{
//         total+=price;
//     })
//     return [total, total*igv]
// }

// const shoppingCard = [phone, tablet];

// const igv = 0.18;

// const [total, totalIgv] = igvCalculation({igv, products: shoppingCard});

// console.log('Total: ', total);
// console.log('Total IGV: ', totalIgv);