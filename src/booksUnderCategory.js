import React, { Component } from 'react';
import './booksUnderCategory.css';
//import { Link } from 'react-router-dom';



class Books extends Component {

  constructor(props){
    super(props);
    this.books = props.match.params;
    //console.log(this.books);
    this.state={
      books:[],
      searchBook:"",
    };
  }


  componentDidMount(){
    fetch("http://skunkworks.ignitesol.com:8000/books/?mime_type=image&topic=" + this.books.bookCategory ,
      {
        headers:{
          'Content-Type': 'application/json',
           Accept: 'application/json',
        },
      })
    .then((results) => results.json())
    .then((data)=> {
      //console.log(data.results[0].formats["image/jpeg"]);
      //console.log(data.results[1].authors[0].name);
      //console.log(data.results[0].formats["text/html; charset=utf-8"]);
      this.setState({
        books:data.results
      })
    }) 
    //console.log("hi");    
  }

  render(){
    return(
      <div className="list">
        {this.renderSearchBar()}
        {this.renderList()}
      </div>
    );
  }

  renderList(){
    return(
      <div>
        {this.state.books.map((book) => {
          var bookLink = "";
          if(book.formats.hasOwnProperty("text/html; charset=utf-8")){
            bookLink=book.formats["text/html; charset=utf-8"];
          }
          else if(book.formats.hasOwnProperty("text/html; charset=iso-8859-1")){
            bookLink=book.formats["text/html; charset=iso-8859-1"];
          }
          else if(book.formats.hasOwnProperty("text/html; charset=us-ascii")){
            bookLink=book.formats["text/html; charset=us-ascii"];
          }
          else if(book.formats.hasOwnProperty("text/plain")){
            bookLink=book.formats["text/plain"];
          }
          else if(book.formats.hasOwnProperty("text/plain; charset=us-ascii")){
            bookLink=book.formats["text/plain; charset=us-ascii"];
          }
          else if(book.formats.hasOwnProperty("text/plain; charset=utf-8")){
            bookLink=book.formats["text/plain; charset=utf-8"];
          }
          else if(book.formats.hasOwnProperty("text/plain; charset=iso-8859-1")){
            bookLink=book.formats["text/plain; charset=iso-8859-1"];
          }
          else{
            bookLink="No Viewable Version Available";
          }
          //console.log(this.bookLink);
          if( book.authors.length !== 0 && bookLink !=="No Viewable Version Available" ){
            return(
              <div key={book.id} className="books">
                <ul>
                  <li><img className="booksImages" src={book.formats["image/jpeg"]} onClick={()=> window.open(bookLink,"_blank")}alt="cannot display"/></li>
                  <li className="bookTitle"><a className="bookLink" href={bookLink} target="_blank">{book.title}</a></li>
                  <li className="author">{book.authors[0].name}</li>
                </ul>  
              </div>
            )

          } 
          else if(book.authors.length === 0 && bookLink !=="No Viewable Version Available"){
            return(
              <div key={book.id} className="books">
                <ul>
                  <li><img className="booksImages" src={book.formats["image/jpeg"]} onClick={()=> window.open(bookLink,"_blank")} alt="cannot display"/></li>
                  <li className="bookTitle"><a className="bookLink" href={bookLink} target="_blank">{book.title}</a></li>
                </ul>  
              </div>
            )
          } 

          else if(book.authors.length !== 0 && bookLink ==="No Viewable Version Available") {
            return(
              <div key={book.id} className="books">
                <ul>
                  <li><img className="booksImages" src={book.formats["image/jpeg"]} onClick={()=> alert("No Viewable Version Available")} alt="cannot display"/></li>
                  <li className="bookTitle"><a className="bookLink" onClick={()=> alert("No Viewable Version Available")} target="_blank">{book.title}</a></li>
                  <li className="author">{book.authors[0].name}</li>
                </ul>  
              </div>
            )
          }

          else if(book.authors.length === 0 && bookLink ==="No Viewable Version Available"){
            return(
              <div key={book.id} className="books">
                <ul>
                  <li><img className="booksImages" src={book.formats["image/jpeg"]} onClick={()=> alert("No Viewable Version Available")}alt="cannot display"/></li>
                  <li className="bookTitle"><a className="bookLink" onClick={()=> alert("No Viewable Version Available")} target="_blank">{book.title}</a></li>
                </ul>  
              </div>
            )
          }
        })}
      </div>
    )
  }

  renderSearchBar(){
    return(
      <div className="searchBar">
        <input 
          type="text"
          value={this.state.searchBook}
          placeholder="Search"
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.onPressEnterForSearch.bind(this)}
        /> 
      </div>
    )
  }
  handleChange(event) {
    this.setState({searchBook: event.target.value});
  }

  onPressEnterForSearch(event){
    var code = event.keyCode || event.which;
    if(code === 13){
      fetch("http://skunkworks.ignitesol.com:8000/books/?mime_type=image&topic=" + this.books.bookCategory + "&search=" + this.state.searchBook,
        {
          headers:{
            'Content-Type': 'application/json',
             Accept: 'application/json',
          },
        })
      .then((results) => results.json())
      .then((data)=> {
        //console.log(data.results[0].formats["image/jpeg"]);
        //console.log(data.results[1].authors[0].name);
        //console.log(data.results[0].formats["text/html; charset=utf-8"]);
        this.setState({
          books:data.results
        })
      })
    }   
  }
}

export default Books; 