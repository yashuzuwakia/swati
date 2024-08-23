import React, { useState } from 'react'
import axios from 'axios'

export const Services = () => {

  const [movieName, setMovieName] = useState("");
  //const [joke, setJoke] = useState([]);

    /* Old way to make an XML Request
  const req = new XMLHttpRequest();

  req.onload = function (){
    console.log("Yeah Pass");
    console.log(JSON.parse(this.responseText).name);
  }

  req.onerror = (res) =>{
    console.log("Failed Error");
    console.log(res)
  }

  req.open("Get","https://swapi.dev/api/people/1/");

  req.send();

  */

  //New way of making a XML Reques Fetch !!!!!

  /*
  fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
      console.log("Loaded!!!", res);
      return res.json();
    })
    .then((data) => {
      console.log("JSON Done!", data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
    */

    //If we want to make one req just after another

    /*
    fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
      console.log("Loaded!!!", res);
      return res.json();
    })
    .then((data) => {
      console.log("JSON Done!", data);
      return fetch("https://swapi.dev/api/people/2/")
    })
    .then((res) => {
      console.log("Second Req");
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });

    */

    //Let's make it more clear with Async Await

    /*
    const loadStarWarsPeople = async () => {
      try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
  
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
      } catch (error) {
        console.log(error)
      }
    }

    loadStarWarsPeople();
    */

    //Making it more easier with Axios

    /*
    axios.get("https://swapi.dev/api/people/2/")
    .then(data=>console.log(data))
    */

    const findTvShow = async (e) => {
      try{
        e.preventDefault();
        //const config = {headers:{ Accept: "Application/json"}}
        const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${movieName}`)
        console.log(res.data.image.medium);
      } catch(error){
        console.log(error);
      }
    }

  return (
    <div>
      <div className='joke'>
        <h1>TV Show Search</h1>
        <form>
        <input type='text' placeholder='TV Show title' name='query' onChange={(event)=>{setMovieName(event.target.value)}}/>
        <button onClick={(e)=>{findTvShow(e)}}>Search</button>
        </form>
      </div>
      <br/>
    </div>
  )
}

