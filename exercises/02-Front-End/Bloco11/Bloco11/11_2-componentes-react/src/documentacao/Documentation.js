import { Component } from 'react';
import Rendering from './renderizandoComponente';
import Componding from './compondoComponente';
import Comment from './Comment';
import NumberList from './NumberList';
import Blog from './Blog';
const { comment, numbers, posts } = require('./data'); 


class Documentation extends Component {
  render() {
    return (
      <div>
        <h1>Exemplos usados na documentação</h1>
        <Rendering />
        <Componding />
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author} />
        <NumberList numbers={numbers} />
        <Blog posts={posts}/>
      </div>
    )
  }
}

export default Documentation;