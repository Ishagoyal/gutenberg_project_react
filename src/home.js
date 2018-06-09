import React, { Component } from 'react';
import './home.css';
//import  RightArrow from './ic_right_arrow.png';
import { Link } from 'react-router-dom';



class Home extends Component {

  constructor(props){
    super(props);
    this.bookCategory ="";
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <div className="project">
          <h1>Gutenberg </h1>
          <h1>Project</h1>
        </div>
        <div>
          {this.renderBookCategories()}
        </div>
      </div>  
    );
  }

  renderBookCategories(){
    return(
      <div className="booksOptions">
        <div className="linkBackground">
          <Link className="bookCategories" to="/books/Fiction" onClick={()=>this.onPressFiction()} > FICTION </Link>
        </div>
        <div className="linkBackground">
          <Link className="bookCategories" to="/books/Drama" onClick={()=>this.onPressDrama()} > DRAMA </Link>
        </div>
        <div className="linkBackground">
          <Link className="bookCategories" to="/books/Humor" onClick={()=>this.onPressHumor()} > HUMOR </Link>
        </div>
        <div className="linkBackground">
          <Link className="bookCategories" to="/books/Politics" onClick={()=>this.onPressPloitics()} > POLITICS </Link>
        </div>
        <div className="linkBackground">
          <Link className="bookCategories" to="/books/Philosophy" onClick={()=>this.onPressPhilosophy()} > PHILOSOPHY </Link>
        </div>
        <div className="linkBackground">
          <Link className="bookCategories" to="/books/History" onClick={()=>this.onPressHistory()} > HISTORY </Link>
        </div>
        <div className="linkBackground">
          <Link className="bookCategories" to="/books/Adventure" onClick={()=>this.onPressAdventure()} > ADVENTURE </Link>
        </div>
      </div>
    )
  }

  onPressFiction(){
    this.bookCategory="Fiction";
    console.log(this.bookCategory);
  }

  onPressDrama(){
    this.bookCategory="Drama";
  }

  onPressHumor(){
    this.bookCategory="Humor";
  }

  onPressPloitics(){
    this.bookCategory="Politics";
  }

  onPressPhilosophy(){
    this.bookCategory="Philosophy";
  }

  onPressHistory(){
    this.bookCategory="History";
  }

  onPressAdventure(){
    this.bookCategory="Fiction";
  }
}

export default Home;
