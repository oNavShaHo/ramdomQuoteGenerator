
import React,{useEffect,useState} from 'react'

import tumblrIcon from '../tumblr.svg';
import twitterIcon from '../twitter.svg';
import '../screen/Screen.css'
export const Screen = () => {
  
  const [quote,setQuote]=useState('');
  const [author,setAuthor]=useState(' ');
  const [color,setColor]=useState(' ');

  useEffect(()=>{
    getQuote()
      },[])
      

  const getQuote=()=>{
    let url ='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        let dataQuotes=data.quotes;
        let randomNum=Math.floor(Math.random()*dataQuotes.length);
        let randomQuote=dataQuotes[randomNum];
      
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        
      
    })
}

const randColor = () =>  {
    setColor( "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase());
    document.getElementById("new-quote").style.backgroundColor = color;
  
}

const colorr=()=>{
  document.getElementById("quote-box").style.color = color;
  document.body.style.backgroundColor = color;
  document.getElementById("tweet-quote").style.backgroundColor = color;
  document.getElementById("tumlr-quote").style.backgroundColor = color;

}
const handleClick=()=>{
    getQuote(); 
    randColor();
    colorr();
 
 } 

  return (
    <div id="back">
    <div id="quote-box">
    
    <div id="text"><p className="color">{quote}</p></div>
    <div id="author"><p className="color">{author}</p></div>

    <div id="buttons">    
      <div className="social-media">
            <a  href="https://twitter.com/" id="tweet-quote">
                <span><img  src={twitterIcon} height="15" alt="" /></span>
            </a>
          
            <a href="https://www.tumblr.com/" id="tumlr-quote">
            <span><img src={tumblrIcon} alt="" /></span>
          </a>
         
    
        </div>
       < button id="new-quote" onClick={handleClick}  >new quote </button>
       </div>

    </div>
    </div>
  )
}

export default  Screen;

