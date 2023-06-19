import React from 'react'
import "./styleTransf.css"
import 'bootstrap'


export default function Container() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 Filters">

            <a> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
            </svg>
              
              Filters</a>
            

              <div class="collapse show" id="collapseFilters">
                            <div class="filter_type">
                                <h6>Price</h6>


                                <span className="irs js-irs-0 irs-with-grid">
  <span className="irs">
    <span className="irs-line" tabIndex="0">
      <span className="irs-line-left"></span>
      <span className="irs-line-mid"></span>
      <span className="irs-line-right"></span>
    </span>
    <span className="irs-min" style={{ display: 'none', visibility: 'visible' }}>0</span>
    <span className="irs-max" style={{ display: 'none', visibility: 'visible' }}>1</span>
    <span className="irs-from" style={{ visibility: 'visible', left: '18.0857%' }}>$30</span>
    <span className="irs-to" style={{ visibility: 'visible', left: '62.7605%' }}>$100</span>
    <span className="irs-single" style={{ visibility: 'hidden', left: '36.9929%' }}>$30 — $100</span>
  </span>
  <span className="irs-grid" style={{ width: '96.7307%', left: '1.53465%' }}>
    <span className="irs-grid-pol" style={{ left: '0%' }}></span>
    <span className="irs-grid-text js-grid-text-0" style={{ left: '0%', marginLeft: '-1.28984%' }}>0</span>
    {/* Other grid elements */}
    {/* ... */}
  </span>
  <span className="irs-bar" style={{ left: '20.9808%', width: '45.141%' }}></span>
  <span className="irs-shadow shadow-from" style={{ display: 'none' }}></span>
  <span className="irs-shadow shadow-to" style={{ display: 'none' }}></span>
  <span className="irs-slider from" style={{ left: '19.3461%' }}></span>
  <span className="irs-slider to type_last" style={{ left: '64.4871%' }}></span>
</span>
                            </div>
                            <div class="filter_type">
                                <h6>Rating</h6>
                                <ul>
                                    <li>
                                       <label class="container_check">
                                            <span class="rating">
                                            <i class="bi bi-emoji-smile"></i> <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>                                            </span>
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="container_check">
                                            <span class="rating">
                                            <i class="bi bi-emoji-smile"></i> <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>                                            </span>
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="container_check">
                                            <span class="rating">
                                            <i class="bi bi-emoji-smile"></i> <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>                                            </span>
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="container_check">
                                            <span class="rating">
                                            <i class="bi bi-emoji-smile"></i> <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>
                                            </span>
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="container_check">
                                            <span class="rating">
                                            <i class="bi bi-emoji-smile"></i> <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>  <i class="bi bi-emoji-smile"></i>
                                            </span>
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>








              

    <div class="filter_type">
                                <h6>Facility</h6>
                                <ul class="mb-0">
                                    <li>
                                        <label class="container_check">
                                            Pet allowed
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="container_check">
                                            Groups allowed
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="container_check">
                                            Tour guides
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label class="container_check">
                                            Access for disabled
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>








          </div>
        </div>

        <div className="row">
          <aside className="col-lg-3 col-md-12 col-sm-12">
          </aside>

          <div className="col-lg-9 col-md-6 col-sm-12">
            <div>hnink</div>
            <div>jhb</div>
            <div>ftyfygf</div>
          </div>
        </div>
      </div>
    </div>




    </div>
  );
}
