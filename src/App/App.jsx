import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Header } from '../Header/header';
import Table from '../Table/table'; 



function App() {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const observer = useRef(null);

  console.log(movieData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${currentPage}`,
          requestData
        );
        if (response.ok) {
          const responseData = await response.json();
          if (currentPage === 1) {
            setMovieData(responseData.results);
          } else {
            setMovieData((prevData) => [...prevData, ...responseData.results]);
          }
          setTotalPages(responseData.total_pages);
        } else {
          console.error('Failed to fetch data.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    if (currentPage <= totalPages) {
      fetchData();
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (movieData.length > 0) {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        },
        { threshold: 1 }
      );
      observer.current.observe(document.querySelector('.movie__card:last-child'));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [movieData, currentPage, totalPages]);

  return (
    <div className="App">
      <Header />
      <Table movieData={movieData} />
    </div>
  );
}

export default App;
