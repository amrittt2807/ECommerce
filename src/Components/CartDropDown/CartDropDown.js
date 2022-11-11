import React from 'react'
import Button from '../Button/Button'
import "./cart-dropdown.styles.scss"

export const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container' >
        <div className='cart-item'/>
        <Button buttonName="GO TO CHECKOUT" style={{fontSize:"small"}} />
    </div>
  )
}
