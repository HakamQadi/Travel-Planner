import React from 'react';
import './Cart.css';
import trash from '../../icon/trash.svg';
import bus from '../../icon/bus.svg';
import bottel from '../../icon/bottle.svg';
import insurance from '../../icon/insurance.svg';
import coffe from '../../icon/coffe.svg';
import guide from '../../icon/guide .svg';
import test from '../../icon/thumb_cart.jpg';
import callCenter from '../../icon/call-center.svg';

function Cart() {
  return (
    <>
      <div className='container'>
        <div className="row">
          {/* Left container */}
          <div className="col-md-8">
            {/* Upper container */}
            <div className="row">
              <div className="col-md-12">
                <table className="table table-striped cart-list add_bottom_30">
                  <thead className='table_head'>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Discount</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='image_row'>
                        <div className="thumb_cart">
                          <img src={test} alt="Imagee" />
                        </div>
                        <span className="item_cart">Louvre Museum tickets</span>
                      </td>
                      <td>
                        <div className="numbers-row">
                          <div className="inc button_inc">
                            <span>+</span>
                          </div>
                          <input type="text" value="1" />
                          <div className="dec button_inc">
                            <span>-</span>
                          </div>
                        </div>
                      </td>
                      <td>0%</td>
                      <td>
                        <strong>€24,71</strong>
                      </td>
                      <td className="options">
                        <img className='remove_icn' src={trash} alt="trash" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Bottom container */}
            <div className="row">
              <table className="table table-striped options_cart">
                <thead>
                  <tr>
                    <th style={{ width: '70%', textAlign: 'left' }}>
                      Add options / Services
                    </th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: '10%', textAlign: "left" }}>
                      <img src={guide} alt='s'></img>
                    </td>
                    <td style={{ width: '60%' }}>
                      Dedicated Tour guide <strong>+$34</strong>
                    </td>
                    <td style={{ width: '35%' }}>
                      <input type="checkbox" name="option_1" id="option_1" />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '10%', textAlign: "left" }}>
                      <img src={bus} alt='s'></img>
                    </td>
                    <td style={{ width: '60%' }}>
                      Pick up service <strong>+$34</strong>
                    </td>
                    <td style={{ width: '35%' }}>
                      <input type="checkbox" name="option_2" id="option_2" />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '10%', textAlign: "left" }}>
                      <img src={insurance} alt='s'></img>
                    </td>
                    <td style={{ width: '60%' }}>
                      Insurance  <strong>+$34</strong>
                    </td>
                    <td style={{ width: '35%' }}>
                      <input type="checkbox" name="option_3" id="option_3" />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '10%', textAlign: "left" }}>
                      <img src={bottel} alt='s'></img>
                    </td>
                    <td style={{ width: '60%' }}>
                      Welcome bottle <strong>+$24</strong>
                    </td>
                    <td style={{ width: '35%' }}>
                      <input type="checkbox" name="option_4" id="option_4" />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '10%', textAlign: "left" }}>
                      <img src={coffe} alt='s'></img>
                    </td>
                    <td style={{ width: '60%' }}>
                      Coffe break <strong>+$12</strong>
                    </td>
                    <td style={{ width: '35%' }}>
                      <input type="checkbox" name="option_5" id="option_5" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Right container */}
          <div className="col-md-4">
            {/* Top container */}
            <div className="box_style_1" style={{ border: '2px solid #dddddd' }}>
              <h3 style={{ backgroundColor: "#565a5c", color: 'white', padding: '15px' }} class="inner">- Summary -</h3>
              <table class="table table_summary">
                <tbody>
                  <tr>
                    <td>
                      Adults
                    </td>
                    <td class="text-end">
                      2
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Children
                    </td>
                    <td class="text-end">
                      0
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Dedicated tour guide
                    </td>
                    <td class="text-end">
                      $34
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Insurance
                    </td>
                    <td class="text-end">
                      $34
                    </td>
                  </tr>
                  <tr class="total">
                    <td>
                      Total cost
                    </td>
                    <td class="text-end">
                      $154
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: "flex", flexDirection: 'column' }}>
                <button className='myBtn1'>Check out</button>
                <button className='myBtn2'>Continue shopping</button>
              </div>
            </div>
            {/* Bottom container */}
            <div className="box_style_1" style={{ border: '2px solid #dddddd', marginTop: '2rem' }}>
              <img style={{ marginTop: '2rem' }} src={callCenter} alt="calCenter" />
              <h3 style={{ marginTop: '1rem' }}>Need Help?</h3>
              <h5 style={{ marginTop: '1rem' }}>077 7777 777</h5>
              <span style={{ margin: '1rem 0rem 1rem 0', paddingBottom: '1rem' }}>Monday to Friday 9.00am - 7.30pm</span>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
