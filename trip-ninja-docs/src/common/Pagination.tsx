import React from "react";


interface PaginationProps {
  nextPageText?: string;
  nextPageUrl?: string;
  prevPageText?: string;
  prevPageUrl?: string;
}

export default function Pagination(props: PaginationProps) {
  return(
    <div className="pb-4 pt-3">
      <hr/>
      <div className="d-flex justify-content-between">
        <div>
          {props.prevPageText && props.prevPageUrl &&
            <div className="d-flex align-items-center">
              <i className="bi bi-chevron-left me-2 arrow"></i>
              <div>
                <p className="small-text mb-0">Previous Page</p>
                <a href={props.prevPageUrl} className="link-text-alt primary-text">
                  {props.prevPageText}
                </a>
              </div>
            </div>
          }
        </div>
        <div>
          {props.nextPageText && props.nextPageUrl &&
            <div className="d-flex align-items-center">
              <div>
                <p className="small-text text-end mb-0">Next Page</p>
                <a href={props.nextPageUrl} className="link-text-alt primary-text">
                  {props.nextPageText}
                </a>
              </div>
              <i className="bi bi-chevron-right ms-2 arrow"></i>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
