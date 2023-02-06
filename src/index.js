import React from 'react';
import ReactDom from 'react-dom/client';
//CSS
import './index.css'

function BookList() {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />


    </section>
  );
}
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// }

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => {
  return <img src="data:image/jpeg;base64,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" alt="" />
}

const Title = () => <h1>I love You</h1>
const Author = () => <h4 style={{ color: 'red', fontSize: '1.25rem', marginTop: '0.25rem' }}> Tien Bieber</h4 >

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <BookList>

  </BookList>
);
