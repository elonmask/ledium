import React, {useState, useEffect} from 'react';

const ProductAmount = ({ product, setProduct, n, shoppingCartOpen  }) => {

  const [count, setCount] = useState(n.count);

  useEffect(() => {
    sessionStorage.setItem('goods', JSON.stringify(product));
    const data = sessionStorage.getItem('goods');
    JSON.parse(data).map(obj => {
      if(obj.id == n.id) {
        setCount(obj.count);
      }
    })
  }, [shoppingCartOpen])

  const plus = () => {
    let arr = [...product];
    setCount(count + 1);
    n.count = count;
    setProduct(arr);
    sessionStorage.setItem('goods', JSON.stringify(arr));
  };

  const minus = () => {
    let arr = [...product];
    if (count >= 1) {
      setCount(count - 1);
      n.count = count;
      setProduct(arr);
      sessionStorage.setItem('goods', JSON.stringify(arr));
    }
  };

  const Sum = () => {
    if ( !n.count ) {
      return n.price;
    } else {
      let price = parseInt(n.price.replace(" ₴", "")); 
      return `${price * n.count} ₴`;
    }
  };

  return (
    <>
      <div className="amount-block">
        <button 
          className="amount-btn"
          onClick={() => minus()}
        >
          <i className="fas fa-minus"></i>
        </button>
        <div className="amount-count">{n.count}</div>
        <button 
          className="amount-btn"
          onClick={() => plus()}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <a className="cart-product-price">{Sum()}</a>
    </>
  )
}

export default ProductAmount;