import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  const { finishedList } = useSelector((state) => state.books);
  return (
    <PageLayout>
      {!finishedList.length && (
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to="/">Discover</Link>{" "}
          page to add books to your list.
        </p>
      )}
      {finishedList.map((book) => (
        <Book key={book.id} book={book} finishedList={finishedList}></Book>
      ))}
    </PageLayout>
  );
};

export default FinishedBooks;
