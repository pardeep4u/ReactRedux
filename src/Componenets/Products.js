import React, { useEffect, useState } from 'react';
import { add } from '../store/cardSlice';
import { useDispatch } from 'react-redux';

function Products() {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {

            if (localStorage.getItem("product")) {

                console.log("Coming from Stored Data!");
                const data = JSON.parse(localStorage.getItem("product"))
                setProducts(data);
                console.log(data);


            } else {

                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                console.log(data);
                setProducts(data);
                localStorage.setItem("product", JSON.stringify(data));

            }


        }

        fetchProducts();

    }, [])


    function handleAdd(product) {

        dispatch(add(product));

    }


    return (
        <div className='centring'>
            <div className='alignment'>

                {
                    products.map((product, index) => (
                        <>

                            <div key={product.id} className="cousenal">
                                <img src={product.image} style={{ width: "280px", height: "280px" }} />
                                <h3>{product.title}</h3>
                                <h3>{product.price}</h3>
                                <button onClick={ () =>  handleAdd(product)  }>Add to Cart</button>

                            </div>

                        </>
                    ))
                }

            </div>
        </div>
    )
}

export default Products