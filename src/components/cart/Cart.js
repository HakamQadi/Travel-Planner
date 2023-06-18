import React from 'react'
import './Cart.css'

function Cart() {
  return (
    <>
      <div className='container' style={{ backgroundColor: "red" }}>
        <div className="row" >
          <div className="col-9" style={{ backgroundColor: "blue" }}>
            <div className="row" style={{ backgroundColor: "green" }}>
              <table className="table table-striped cart-list add_bottom_30">
                <thead>
                  <tr>
                    <th>
                      Item
                    </th>
                    <th>
                      Quantity
                    </th>
                    <th>
                      Discount
                    </th>
                    <th>
                      Total
                    </th>
                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img src="img/thumb_cart_1.jpg" alt="Imagee" />
                      </div>
                      <span className="item_cart">Louvre Museum tickets</span>
                    </td>
                    <td>
                      <div className="numbers-row">
                        <input type="text" value="1" id="quantity_1" className="qty2 form-control" name="quantity_1" />
                        <div className="inc button_inc"><span>+</span></div><div className="dec button_inc"><span>-</span></div></div>
                    </td>
                    <td>
                      0%
                    </td>
                    <td>
                      <strong>€24,71</strong>
                    </td>
                    <td className="options">
                      <a href="/"><i className=" icon-trash"></i></a><a href="/"><i className="icon-ccw-2"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img src="img/thumb_cart_1.jpg" alt="Imagee" />
                      </div>
                      <span className="item_cart">Eiffell tour</span>
                    </td>
                    <td>
                      <div className="numbers-row">
                        <input type="text" value="0" id="quantity_2" className="qty2 form-control" name="quantity_2" />
                        <div className="inc button_inc">+</div><div className="dec button_inc">-</div></div>
                    </td>
                    <td>
                      0%
                    </td>
                    <td>
                      <strong>€0,0</strong>
                    </td>
                    <td className="options">
                      <a href="/"><i className=" icon-trash"></i></a><a href="/"><i className="icon-ccw-2"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img src="img/thumb_cart_1.jpg" alt="Imageee" />
                      </div>
                      <span className="item_cart">Senna river Tour</span>
                    </td>
                    <td>
                      <div className="numbers-row">
                        <input type="text" value="1" id="quantity_3" className="qty2 form-control" name="quantity_3" />
                        <div className="inc button_inc">+</div><div className="dec button_inc">-</div></div>
                    </td>
                    <td>
                      0%
                    </td>
                    <td>
                      <strong>€24,71</strong>
                    </td>
                    <td className="options">
                      <a href="/"><i className=" icon-trash"></i></a><a href="/"><i className="icon-ccw-2"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="row">bottom</div>
          </div>
          <div className="col-3">right</div>

        </div>
      </div>
    </>

  )
}

export default Cart
