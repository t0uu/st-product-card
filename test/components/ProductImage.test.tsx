import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage,ProductCard } from '../../src/components';
import {  product2 } from './data/product';


describe('ProductTitle', () => {

    test('debe de mostrar el componente correctamente con la imagen', () => {
        const wrapper = renderer.create(
            <ProductImage  img={product2.img}/>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('debe de mostrar el product card con la imagen' , () => {
        const wrapper = renderer.create(
            <ProductCard
            product={product2}
            >
                {
                    () => (
                       <ProductImage img={product2.img}/>
                    )
                }

            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})