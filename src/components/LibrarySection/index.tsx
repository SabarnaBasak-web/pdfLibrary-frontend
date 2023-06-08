import { useEffect, useState } from "react";
import { BookResponse } from "../../types/book";
import { fetchHandler } from "../../helper/fetcher";

const LibrarySection = () => {
  const [bookList, setBookList] = useState<BookResponse[] | []>([]);

  const fetchAllBooks = async () => {
    const allBooks = await fetchHandler("http://localhost:3000/ebook/", "GET");
    if (allBooks.status === 200) {
      const result = await allBooks.json();
      if (result.length) setBookList(result);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div>
      {bookList.map((item) => {
        return (
          <div key={item.id.toString()}>
            <h4>{item.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LibrarySection;
