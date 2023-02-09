import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButton';
import { ProductCardHOCProps } from '../interfaces/interfaces';
export {ProductImage} from './ProductImage'
export {ProductTitle} from './ProductTitle'
export {ProductButtons} from './ProductButton'


export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})




export default ProductCard;