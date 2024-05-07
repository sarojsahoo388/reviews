import React from 'react'

const Main = () => {
  return (
    <div className='m-4'>
       <h4 style={{ color: '#772CDD',margin:'60px',borderBottom: '3px solid #772CDD' }}>Ninja Reviews</h4>
       <div className="d-flex justify-content-end align-items-center" style={{marginRight:'60px'}}>
      <div>Filter reviews by category:</div>
      <div className="btn-group">
      <button className="btn border-0" style={{ textDecoration: 'underline', color: '#772CDD' }}>PS5</button>
          <button className="btn border-0" style={{ textDecoration: 'underline', color: '#772CDD' }}>Xbox</button>
          <button className="btn border-0" style={{ textDecoration: 'underline', color: '#772CDD' }}>Switch</button>

      </div>
    </div>
    </div>
  )
}

export default Main