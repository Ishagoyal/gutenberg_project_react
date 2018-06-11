import React, { Component } from 'react';
import './home.css';
import  RightArrowIcon from './ic_right_arrow.png';
import { Link } from 'react-router-dom';


class Home extends Component {

  constructor(props){
    super(props);
    this.bookCategory ="";
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
        <Link  to="/books/Fiction"  onClick={()=>this.onPressFiction()} className="linkBackground" > 
          FICTION 
          <img src={RightArrowIcon} className="rightArrow" alt="RightArrowIcon" />
        </Link> 
        <Link  to="/books/Drama"  onClick={()=>this.onPressDrama()} className="linkBackground" > 
          DRAMA
          <img src={RightArrowIcon} className="rightArrow" alt="RightArrowIcon" />
        </Link> 
        <Link  to="/books/Humor"  onClick={()=>this.onPressHumor()} className="linkBackground" > 
          HUMOR 
          <img src={RightArrowIcon} className="rightArrow" alt="RightArrowIcon" />
        </Link> 
        <Link  to="/books/Politics"  onClick={()=>this.onPressPloitics()} className="linkBackground" > 
          POLITICS 
          <img src={RightArrowIcon} className="rightArrow" alt="RightArrowIcon" />
        </Link> 
        <Link  to="/books/Philosophy"  onClick={()=>this.onPressPhilosophy()} className="linkBackground" > 
          PHILOSOPHY 
          <img src={RightArrowIcon} className="rightArrow" alt="RightArrowIcon" />
        </Link> 
        <Link  to="/books/History"  onClick={()=>this.onPressHistory()} className="linkBackground" > 
          HISTORY 
          <img src={RightArrowIcon} className="rightArrow" alt="RightArrowIcon" />
        </Link> 
        <Link  to="/books/Adventure"  onClick={()=>this.onPressAdventure()} className="linkBackground" > 
          ADVENTURE 
          <img src={RightArrowIcon} className="rightArrow" alt="RightArrowIcon" />
        </Link>  
      </div>
    )
  }

  onPressFiction(){
    this.bookCategory="Fiction";
    //console.log(this.bookCategory);
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
