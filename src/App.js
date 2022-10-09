import React, { Component } from "react";

import { Card, CardHeader,  CardContent, Typography, Container, Grid } from '@material-ui/core';
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

import Books from './static_data/Books';
import BookDetail from "./components/BookDetail";

class App extends Component {

  // state 정의
  constructor(props){
    super(props);

    this.state = {
      books : Books,
      selectedBook : Books[0],
    }
  }

  onSearchTitle(title){
    let updateList = Books;
    
    updateList = updateList.filter( book => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
    });

    if(Array.isArray(updateList) && updateList.length !== 0) {
      // Search Text가 book.title에 포함된 리스트가 존재 하면 state 변경
      this.setState({
        books : updateList,
        selectedBook : updateList[0],
      })
    } else {
      // Search Text가 book.title에 포함된 리스트가 존재하지 않으면 state 개체 초기화
      this.setState({
        books : [],
        selectedBook : {},
      })
    }    
  }

  onSelectedBook(book){
    this.setState({
      selectedBook : book,
    })
  }

  render(){

    if( Array.isArray(this.state.books) && this.state.books.length !== 0 ) {
      return(
        <Container>
          <SearchBar onSearchTitle = { this.onSearchTitle.bind(this) } />
          <Grid container spacing={2}>
            <Grid item>
              <BookList onSelectedBook={ this.onSelectedBook.bind(this) }  books={ this.state.books }/>
            </Grid>
            <Grid item>
              <BookDetail book = { this.state.selectedBook } />
            </Grid>          
          </Grid>
        </Container>
      )
    } else {
      return(
        <Container>
          <SearchBar onSearchTitle = { this.onSearchTitle.bind(this) } />
          <Card>
            <CardHeader title={'Search text not found in bookList.'}/>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p' >
                  {'Empty List'}
              </Typography>
            </CardContent>
          </Card>          
        </Container>
      )      
    }
  }

}

export default App;
