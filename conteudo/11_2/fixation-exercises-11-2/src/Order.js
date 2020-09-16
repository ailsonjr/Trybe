import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order; // É feito um destructuring para que o parâmetro order tenha essas keys

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;