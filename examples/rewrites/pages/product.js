import React from 'react'

export default function Product(props) {
  console.log('component props', props)
  return <p>Product</p>
}

Product.getInitialProps = async (args) => {
  return { hello: 'world', query: args.query }
}
