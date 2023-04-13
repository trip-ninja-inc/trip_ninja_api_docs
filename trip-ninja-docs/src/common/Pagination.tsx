import React from "react";


interface PaginationProps {
  nextPageText: string;
  nextPageUrl: string;
  prevPageText: string;
  prevPageUrl: string;
}

export default function Pagination(props: PaginationProps) {
  return(
    <div>
      <hr/>
      <div className="d-flex justify-content-between">
        <div>
          <p>Previous Page</p>
        </div>
        <div>
          <p>Next Page</p>
          
        </div>
      </div>
    </div>
  );
}
