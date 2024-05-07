import React from 'react'

const Reviews = () => {
  return (
    <div className='m-4'>
       <div  style={{marginLeft:'60px'}}>
        <h4>Xbox</h4>
       </div>
       <div>



        <section style={{ backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginLeft: '60px',marginTop: '60px',marginRight: '60px', position: 'relative' }}>
            <div className="d-flex">
            <div className="box mr-3 ninja-review-color" style={{ marginTop: '-20px', marginLeft: '-20px' }}>6</div>
            <div className='m-4'>
                <h5 className="font-weight-bold">Biomutant</h5>
                <div>
                <p style={{ color: 'gray', fontSize: '14px' }}>PS5 Xbox</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="btn border-0" style={{ textDecoration: 'underline', color: '#772CDD' }}>Read more</button>
            </div>
            </div>
        </section>
        
        
        
        <section style={{ backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', marginLeft: '60px',marginTop: '60px', marginRight: '60px',  position: 'relative' }}>
            <div className="d-flex">
            <div className="box mr-3 ninja-review-color" style={{ marginTop: '-20px', marginLeft: '-20px' }}>8</div>
            <div className='m-4'>
                <h5 className="font-weight-bold">Biomutant</h5>
                <div>
                <p style={{ color: 'gray', fontSize: '14px' }}>PS5 Xbox Switch</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="btn border-0" style={{ textDecoration: 'underline', color: '#772CDD' }}>Read more</button>
            </div>
            </div>
        </section>

       </div>
    </div>
    
  )
}

export default Reviews