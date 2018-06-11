import React, { Component } from 'react';
import './booksUnderCategory.css';
import SearchIcon from './ic_search.png';
import LeftArrow from './ic_left_arrow.png';
import CloseIcon from './ic_close.png';
import createHistory from "history/createBrowserHistory";


const history = createHistory();

class Books extends Component {

  constructor(props){
    super(props);
    this.books = props.match.params;
    //console.log(this.books);
    this.state={
      books:[],
      searchBook:"",
      isLoading:true,
      isSearching:false,
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
        books:data.results,
        isLoading:false,
      })
    }) 
    //console.log("hi");    
  }

  render(){
    //console.log(this.state.isLoading);
    if(this.state.isLoading){
      return(
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )
    }
    else{
      return(
        <div className="list">
          {this.renderSearchBar()}
          {this.renderList()}
        </div>
      );
    } 
  }

  renderList(){
    return(
      <div >
        <h4>{this.books.bookCategory}</h4>
        {this.state.books.map((book) => {
          var bookLink = "";
          if((book.formats.hasOwnProperty("text/html; charset=utf-8")) && (book.formats["text/html; charset=utf-8"]).split('.').pop()!=="zip"){
            bookLink=book.formats["text/html; charset=utf-8"];
          }
          else if(book.formats.hasOwnProperty("text/html; charset=iso-8859-1") && (book.formats["text/html; charset=iso-8859-1"]).split('.').pop()!=="zip"){
            bookLink=book.formats["text/html; charset=iso-8859-1"];
          }
          else if(book.formats.hasOwnProperty("text/html; charset=us-ascii") && (book.formats["text/html; charset=us-ascii"]).split('.').pop()!=="zip"){
            bookLink=book.formats["text/html; charset=us-ascii"];
          }
          else if(book.formats.hasOwnProperty("text/plain") && (book.formats["text/plain"]).split('.').pop()!=="zip"){
            bookLink=book.formats["text/plain"];
          }
          else if(book.formats.hasOwnProperty("text/plain; charset=us-ascii") && (book.formats["text/plain; charset=us-ascii"]).split('.').pop()!=="zip"){
            bookLink=book.formats["text/plain; charset=us-ascii"];
          }
          else if(book.formats.hasOwnProperty("text/plain; charset=utf-8") && (book.formats["text/plain; charset=utf-8"]).split('.').pop()!=="zip"){
            bookLink=book.formats["text/plain; charset=utf-8"];
          }
          else if(book.formats.hasOwnProperty("text/plain; charset=iso-8859-1") && (book.formats["text/plain; charset=iso-8859-1"]).split('.').pop()!=="zip"){
            bookLink=book.formats["text/plain; charset=iso-8859-1"];
          }
          else{
            bookLink="No Viewable Version Available";
          }
          
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
    if(this.state.isSearching){
      return(
        <div className="searchBar" >
          <img className="leftArrow" src={LeftArrow} onClick ={()=>history.goBack()} alt="back"/>
          <img className="searchIcon" src={SearchIcon} alt="search"/>
          <input 
            type="text"
            value={this.state.searchBook}
            placeholder="Search"
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.onPressEnterForSearch.bind(this)}
          /> 
          <img className="closeIcon" src={CloseIcon} alt="close"/>
          <button className="cancel" onClick={()=>this.onPressCancel()} >CANCEL</button>
        </div>
      )
    }
    else{
      return(
        <div className="searchBar" >
          <img className="leftArrow" src={LeftArrow} onClick ={()=>history.goBack()} alt="back"/>
          <img className="searchIcon" src={SearchIcon} alt="search"/>
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
  }

  onPressCancel(){
    this.setState({
      searchBook:"",
    });
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
          books:data.results,
          isSearching:true,
        })
      })
    }   
  }
}

export default Books; 