import React from 'react'
import { Container } from 'react-bootstrap'

const Map = () => {
  return (
    <Container className='mt-5'>
      <h1 className='text-center mb-2 main_heading'>Getting Here</h1>
      <hr className='mb-5 w-25 mx-auto' />
      <iframe className="gmap_iframe"
        style={{
          height: '500px',
          width: "100%"
        }}
        src="https://maps.google.com/maps?width=800&amp;height=450&amp;hl=en&amp;q=faizan e madina karachi&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

      </iframe>
    </Container>
  )
}

export default Map