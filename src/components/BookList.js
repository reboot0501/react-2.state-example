// 세번째 생성 Component
import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';
import BookListItem from './BookListItem';

class BookList extends Component {
    render() {

        const bookitems = this.props.books.map( book => {
            return(
                <BookListItem  
                    book={ book } 
                    key={ book.ISBN } 
                    onSelectedBook={this.props.onSelectedBook}
                />
            )
        });

        return(
            <List>
                { Array.isArray(bookitems) && bookitems.length !== 0 ? bookitems : 'Empty List' }
            </List>
        )
    }
}

export default BookList;