import React, {useContext} from 'react'

export const CartItem = (props)  => {
  const {id, productName, price, productImage} = props.data
  const {cartItems} = useContext(ShopContext)
  return (
    
    <div className='cartItem'>
    
    <img src={productImage} alt="" />
    <div className='description'>
      <p> <b> {productName}</b></p>
      <p> ${price}</p>
      <div className='countHandler'>
        <button> - </button>
        <input value={}/>
        <button> + </button>
      </div>
    </div>
    </div>  
  )
}

