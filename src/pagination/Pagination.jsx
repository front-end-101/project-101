import { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentPerPage] = useState(10);

  useEffect(() => {
    const fetchCommments = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(res.data);
    };
    fetchCommments();
  }, []);

  const indexOfLastComment = currentPage * commentPerPage;
  const indexOfFirstComment = indexOfLastComment - commentPerPage;

  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-10">
      {currentComments.map((comment) => {
        return <div className="border-2 p-2 my-2 " key={comment.id}>{comment.name}</div>;
      })}
      <PageComponent
        paginate={paginate}
        totalComments={comments.length}
        commentPerPage={commentPerPage}
        currentPage={currentPage}
      />
    </div>
  );
};

const PageComponent = ({
  currentPage,
  paginate,
  totalComments,
  commentPerPage,
}) => {
  const pageNumbers = [];
  const numOfPage = Math.ceil(totalComments / commentPerPage);
  for (let i = 1; i <= numOfPage; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (number) => {
    paginate(number)
  }

  return (
    <div className="flex justify-center items-center gap-4">
        <h2 className="flex justify-center items-center gap-3">Current Page : <span className="flex justify-center items-center w-10 h-10 bg-slate-400 p-2 rounded-full text-slate-50">{currentPage}</span> </h2>
      {pageNumbers.slice(0, 10).map((item) => (
        <div className="cursor-pointer p-1" key={item} onClick={() => paginate(item)}>
          {item}
        </div>
      ))}
      <select name="" id="" onChange={(e) => handlePageChange(e.target.value)}>
        {pageNumbers.slice(10).map((number) => {
         return <option key={number} value={number}>
            {number}
          </option>;
        })}
      </select>
    </div>
  );
};

export default Pagination;
