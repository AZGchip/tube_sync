import React from 'react';
import WebSocket from "../compontent/WebSocket"
// import context for global state
// import UserInfoContext from '../utils/UserInfoContext';

// import * as API from '../utils/API';
// import AuthService from '../utils/auth';

function SyncView() {
  // get whole userData state object from App.js
//   const userData = useContext(UserInfoContext);
//   console.log(userData)
  
  // create function that accepts the book's mongo _id value as param and deletes the book from the database
//   const handleDeleteBook = (bookId) => {
//     // get token
//     const token = AuthService.loggedIn() ? AuthService.getToken() : null;

//     if (!token) {
//       return false;
//     }
//     API.deleteBook(bookId, token)
//       // upon succes, update user data to reflect book change
//       .then(() => userData.getUserData())
//       .catch((err) => console.log(err));
//   };

  return (
    <>
      
      <div className="container">
        
        <WebSocket nameOfUser={"test name"}/>
      
        {/* <h4>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'No stored links'}
        </h4> */}
        
        {/* <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns> */}
      </div>
    </>
  );
}

export default SyncView;