import React from 'react'
import "./App.css";
import { useState, useEffect } from 'react';

function Movie({searchTitle}) {
	if(searchTitle === '') searchTitle = 'spongebob';
	const fetchString = 'http://www.omdbapi.com/?apikey=2e1e970c&s=' + searchTitle;
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(fetchString)
		.then(res  => res.json())
		.then(data => setData(data.Search));
	}, [fetchString]);

  return (
  <div class="flex-container">
		{
	    data === undefined ? <h1><font color="white">Movie title not found</font></h1> :
		(data.map((d,index) => {
			return(
				<div class="img-container">
					<img src={d.Poster} alt={d.Title} />
					<div class="text-block">
						<span><b>{d.Title.substring(0,40)}</b></span>
					</div>
				</div>
			)
		}
		))
		}
  </div>
  );
}

export default Movies
