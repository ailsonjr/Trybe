import { Component } from 'react';
import Greeting from './greeting';
import Image from './Image';
import UserProfile from './UserProfile';
import Order from './Order';
const { users, products } = require('./data');

class Lecture extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>Exemplos do conteúdo da aula</h1>
        <Greeting name="Samuel" lastName="Silva" />
        <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" />
        {users.map(user => (
          <div>
            <UserProfile user={user} />
          </div>
        ))}
        
        {products.map(product => (
          <div>
            <Order order={product} />
          </div>
        ))}
        <hr />
      </div>
    )
  }
}

export default Lecture;