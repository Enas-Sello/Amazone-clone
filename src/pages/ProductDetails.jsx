import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails ()
{
    const params = useParams()
    const {id} = params

  return (
    <div>{id}</div>
  )
}

export default ProductDetails