import React from 'react';
const Book = (props) => {
    const { img, title, author, children } = props;
    const clickHandler = () => {
        alert('hello');
    }
    const complexExample = (author) => {
        console.log(author);
    }
    return (
        <article className='book'>
            <img src={img} alt="coverBook" onMouseOver={() => {
                console.log(title)
            }} />
            <h1>{title.toUpperCase()}</h1>
            <h4>{author}</h4>
            {children}
            <button type="button" onClick={clickHandler}>
                Example
            </button>
            <button type="button" onClick={() => complexExample(author)}>
                {/* sẽ click duy nhất 1 đối tượng được chỉ định */}
                Example
            </button>
        </article>
    )
}
export default Book;