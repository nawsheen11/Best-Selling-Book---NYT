import React, { useState, useEffect } from "react";
import BestBooks from "./BestBook";

function Fiction() {
  useEffect(() => {
    fetchData();
  }, []);

  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=2QtZ1gvLVrAbNZNVw8gLVkngpLdhDUOP"
    );
    const data = await response.json();
    console.log(data);
    setResults(data.results.books);
  };

  return (
    <div>
      <h1>Fiction</h1>

      {results.map((result) => (
        <BestBooks
          title={result.title}
          author={result.author}
          description={result.description}
          amazonURL={result.amazon_product_url}
          image={result.book_image}
        />
      ))}

    </div>
  );
}

export default Fiction;
