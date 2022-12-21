import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cardSlice';

function Cart() {

  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemove(productId){

    dispatch( remove(productId) )

  }

  return (
    <div>

      {
        products.map((product, index) => (
          <>

            <div key={product.id} className="cousenal">
              <img src={product.image} style={{ width: "280px", height: "280px" }} />
              <h3>{product.title}</h3>
              <h3>{product.price}</h3>
              <button onClick={() => handleRemove(product.id)}>Remove From Cart</button>

            </div>

          </>
        ))
      }


    </div>
  )
}

export default Cart