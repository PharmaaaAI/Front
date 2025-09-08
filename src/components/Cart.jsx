import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseItemInCart, decreaseItemInCart, clearCart } from "../rtk/slices/items-slice";
import { API_BASE_URL } from "../utils/api-url";
import { Link } from "react-router";
import updateBack from "../utils/updateProductFetch";
import Payment from "./Payment";
import addOrderApi from "../utils/addOrderApi";

const formatEGP = (n) => `EGP ${n}`


export default function Cart() {

  const items = useSelector(state => state.items)
  const dispatch = useDispatch();

  const [isCheckOutClicked, setIsCheckOutClicked] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [items])

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    if(items)
    {
      setProducts(
        await Promise.all(
          items.map(async item => {
            const res = await fetch(`${API_BASE_URL}/products/${item.productID}`);
            const data = await res.json();
            return {...data.data, quantity: item.quantity}
          })
        )
      )
    }
  }

  const counts = useMemo(() => products.reduce((acc, it) => acc + it.quantity, 0), [products]);
  const subtotal = useMemo(
    () => products.reduce((acc, it) => parseFloat((acc + it.price * it.quantity).toFixed(2)), 0),
    [products]
  );
  const shippingCost = 50

  const [method, setMethod] = useState("");


  const cashFee = method === "Cash" ? 10 : 0;
  const total = parseFloat(Math.max(0, subtotal + shippingCost + cashFee).toFixed(2));

  const [showPopup, setShowPopup] = useState(false);
  
  const inc = (id) => {
    dispatch(increaseItemInCart(id))
    updateBack("increaseProduct", id)
  }
  const dec = (id) => {
    dispatch(decreaseItemInCart(id));
    updateBack("decreaseProduct", id)
  }
  const remove = (id) => {
    dispatch(removeFromCart(id));
    updateBack("removeProduct", id)
  } 
  const clear = () => {
    dispatch(clearCart())
    updateBack("clear")
  }



  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Your Cart</h1>
            <p className="text-sm text-gray-500">{counts} item{counts !== 1 ? "s" : ""}</p>
          </div>
          {items.length > 0 && (
            <button
              onClick={clear}
              className="text-sm font-medium text-red-600 hover:text-red-700"
            >
              Clear cart
            </button>
          )}
        </header>

        {items.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <section className="lg:col-span-2 space-y-4">
              {products.map((it) => (
                <CartRow
                  key={it.id}
                  item={it}
                  onInc={() => inc(it._id)}
                  onDec={() => dec(it._id)}
                  onRemove={() => remove(it._id)}
                />
              ))}
            </section>

            <aside className="lg:col-span-1">
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">Order Summary</h2>

                <div className="mb-4 space-y-2 text-sm">
                  <Row label="Subtotal" value={formatEGP(subtotal)} />
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Shipping</span>
                    {`${formatEGP(50)}`}
                  </div>
                </div>

                <PaymentMethodSelect method={method} setMethod={setMethod} setIsCheckOutClicked={setIsCheckOutClicked}/>

                <div className="mb-5 border-t pt-4">
                  <Row label={<span className="font-semibold">Total</span>} value={<span className="font-semibold">{formatEGP(total)}</span>} />
                </div>

                <button
                  className="w-full rounded-2xl bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={items.length === 0}
                  onClick={() => {
                    if(method === "Visa") 
                      setIsCheckOutClicked(true);
                    else if (method === "Cash")
                      addOrderApi(method, total, items, dispatch)
                    else{
                      setShowPopup(true)
                    }
                  }}
                >
                  Checkout
                </button>

                <p className="mt-2 text-center text-xs text-gray-500">
                  By placing your order, you agree to our Terms & Privacy Policy.
                </p>
              </div>
            </aside>
          </div>
        )}

        {isCheckOutClicked && <Payment method={method} amount={total}/>}
      </div>
      {showPopup && PopUpMessage(setShowPopup)}
    </div>

    
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="tabular-nums text-gray-900">{value}</span>
    </div>
  );
}


function CartRow({ item, onInc, onDec, onRemove }) {

  return ( item &&
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <Link to={`/product/${item._id}`}>
          <img
            src={item.images[0]}
            alt={item.name}
            className="h-20 w-20 flex-shrink-0 rounded-xl object-contain ring-1 ring-gray-100"
          />
        </Link>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <Link to={`/product/${item._id}`}>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-medium text-gray-900">{item.name}</h3>
              </div>
            </Link>

            <button
              aria-label={`Remove ${item.name}`}
              onClick={onRemove}
              className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-red-600"
              title="Remove"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M6.72 6.72a.75.75 0 011.06 0L12 10.94l4.22-4.22a.75.75 0 111.06 1.06L13.06 12l4.22 4.22a.75.75 0 11-1.06 1.06L12 13.06l-4.22 4.22a.75.75 0 01-1.06-1.06L10.94 12 6.72 7.78a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center rounded-full border bg-gray-50/50 p-1 shadow-inner">
              <button
                aria-label={`Decrease quantity of ${item.name}`}
                onClick={onDec}
                className="h-8 w-8 rounded-full text-gray-700 hover:bg-white cursor-pointer"
              >
                −
              </button>
              <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
              <button
                aria-label={`Increase quantity of ${item.name}`}
                onClick={onInc}
                className="h-8 w-8 rounded-full text-gray-700 hover:bg-white cursor-pointer"
              >
                +
              </button>
            </div>

            <div className="ml-auto text-right">
              <p className="text-xs text-gray-500">Unit price</p>
              <p className="text-sm font-medium text-gray-900">{formatEGP(item.price)}</p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">Line total</p>
              <p className="text-sm font-semibold text-gray-900">
                {formatEGP(parseFloat((item.price * item.quantity).toFixed(2)))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
      <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-gray-100 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-gray-600">
          <path d="M2.25 2.25a.75.75 0 000 1.5H5.4l2.69 10.77a2.25 2.25 0 002.19 1.73h6.88a2.25 2.25 0 002.17-1.63l1.74-6.1a.75.75 0 10-1.44-.41l-1.73 6.1a.75.75 0 01-.72.54H10.3a.75.75 0 01-.73-.57L7 3.75h13.99a.75.75 0 000-1.5H2.25z" />
          <path d="M10.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM18 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">Your cart is empty</h3>
      <p className="mt-1 text-sm text-gray-500">Add some products to get started.</p>
      <div className="mt-6">
        <Link
          to="/products"
          className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}


function PaymentMethodSelect({method, setMethod, setIsCheckOutClicked}) {

  return (
    <div className="w-full max-w-md mx-auto mb-3">
      <label htmlFor="payment" className="block text-gray-700 font-medium mb-2">
        Select Payment Method
      </label>

      <select
        id="payment"
        value={method}
        onChange={(e) => {
          setMethod(e.target.value)
          if(e.target.value !== "Visa")
            setIsCheckOutClicked(false)
        }}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      >
        <option value="">-- Choose a method --</option>
        <option value="Visa">💳 Credit Card</option>
        <option value="Cash">💵 Cash on Delivery</option>
      </select>

      {method === "Cash" && (
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Cash Fee</span>
          {`${formatEGP(10)}`}
        </div>
      )}
    </div>
  );
}

function PopUpMessage(setShowPopup){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
        <h3 className="text-lg font-semibold mb-2">Payment Required</h3>
        <p className="text-gray-600 mb-4">
          Please select a payment method before continuing.
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Okay
        </button>
      </div>
    </div>
  )
}