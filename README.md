# ST-PRODUCT-CARD


Este es un paquete de pruebas de despliegue en NPM


### Santiago Touzet 

```
import {ProductCard,ProductImage,ProductTitle,ProductButtons} from 'ST-PRODUCT-CARD';
```


```
<ProductCard 
key={product.id}
product={product} 
initialValues={{
count:4,
maxCount:10,
}}>
{({count,reset,increaseBy,isMaxCountReached,maxCount}) => (
<>
<ProductImage />
<ProductTitle  />
<ProductButtons/>
</>)}
 </ProductCard>
```
