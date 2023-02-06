import React from 'react';
import ReactDom from 'react-dom/client';
//CSS
import './index.css';

import { books } from './books'
import Book from './Book';
const title = 'I love you';
function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        {/* const { img, title, author } = book; */ }
        {/* return <Book key={book.id} book={book} /> */ }
        return <Book key={book.id} {...book} />

      })}
    </section>
  );
}
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// }



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <BookList>

  </BookList>
);
