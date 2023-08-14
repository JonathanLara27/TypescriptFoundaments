
import { Product, igvCalculation} from "./06-function-destructuring";

const shippingCart: Product[] = [
    {
        desc: 'Nokia A1',
        price: 150.00
    },
    {
        desc: 'iPad Air',
        price: 350.00
    }
];

const igv=0.18;
const [total, totalIgv] = igvCalculation({igv, products: shippingCart});

console.log('Total: ', total);
console.log('Total IGV: ', totalIgv);

