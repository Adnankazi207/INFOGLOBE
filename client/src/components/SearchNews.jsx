import  { useState, useEffect } from 'react';
import Card from './Card';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';


function SearchNews() {
  const {searchTerm} = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  const pageSize = 9;

  useEffect(() => {
     if (!searchTerm) return;  // Don't fetch if searchTerm is empty

    setIsLoading(true);
    setError(null);
     
    // const searchParam= searchTerm.search ? `&q=${params.search}` :"";
    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&page=${page}&pageSize=${pageSize}&apiKey=6c6ddf960c16462587385c4e8af8cfed`)
    // fetch(`http://localhost:7000/search?q=${searchTerm}&page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        console.log("fetching serach result for", searchTerm);
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((myJson) => {
        console.log("resJson", myJson);
        if (myJson.status === "ok") {
          setTotalResults(myJson.totalResults);
          setData(myJson.articles);
        } else {
          setError(myJson.message || 'An error occurred');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to fetch news. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [  searchTerm,   page]);

  return (
    <>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
        {!isLoading ? (
          data.length > 0 ? (
            data.map((element, index) => (
              <Card
                key={index}
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                publishedAt={element.publishedAt}
                url={element.url}
                author={element.author}
                source={element.source.name}
              />
            ))
          ) : (
            <p>No news articles found for .</p>
          )
        ) : (
          <Loader />
        )}
      </div>
      {!isLoading && data.length > 0 && (
        <div className="pagination flex justify-center gap-14 my-10 items-center">
          <button
            disabled={page <= 1}
            className="pagination-btn"
            onClick={handlePrev}
          >
            Prev
          </button>
          <p className="font-semibold opacity-80">
            {page} of {Math.ceil(totalResults / pageSize)}
          </p>
          <button
            disabled={page >= Math.ceil(totalResults / pageSize)}
            className="pagination-btn"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

// SearchNews.propTypes = {
//     searchTerm : PropTypes.string.isRequired,
// }

export default SearchNews;