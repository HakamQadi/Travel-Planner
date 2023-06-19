import React from 'react'
import "./headerTransfers.css"

// import "react-bootstrap";


export default function HeaderTransfers() {
  return (
    <div>
      <div className="containerHT">
    

        <div className='titelTransfers'>
          <h1>PARIS TRANSFER</h1>
          <h3>Cursus neque cursus curae ante scelerisque vehicula.</h3>
        </div>
      </div>


      {/* <---------------start Map ----------> */}
      <div id="position">
			<div class="containerMap">
				<ul>
					<li><a href="#" style={{textDecoration:"none"}}>Home   <span>&gt;</span> </a>
					</li>
					<li><a href="#" style={{textDecoration:"none"}}>Category <span>{'\u003E'}</span>  </a>
					</li>
					<li>Page active</li>
				</ul>
			</div>
		</div>
     {/* <---------------End Map ----------> */}
    </div>
  );
}
