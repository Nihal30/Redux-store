import React from 'react'
import Products from '../Component/Products'

const Dashboard = () => {
  return (
    <div>
        <h2 className='heading' >Welcom To Redux Toolkit</h2>
        <section>
            <h3>Products</h3>
            <Products/>
            
        </section>
    </div>
  )
}

export default Dashboard