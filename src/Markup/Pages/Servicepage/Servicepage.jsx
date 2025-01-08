import React from 'react'
import Service from '../../Component/Services/Service'
import Shope from '../../Component/Home/Shope'
import TunedUpdate from '../../Component/Home/TunedUpdate'
import Decor from '../../Component/Decoreevent/Decor'

const Servicepage = () => {
  return (
    <div>
       <div className='home page  body_filled  scheme_original'>
        <div class="body_wrap">
      
		<div class="page_wrap"></div>
      <Service/>
      <Decor/>
      <TunedUpdate/>
      </div>
      </div>
      </div>
    
    
  )
}

export default Servicepage
