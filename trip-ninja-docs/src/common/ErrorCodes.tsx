import React from "react";


export default function ErrorCodes() {
  return(
    <div>
      <h3>Error Codes</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IE01</td>
            <td>Need minimum 2 destinations</td>
          </tr>
          <tr>
            <td>IE02</td>
            <td>Duplicate city in list</td>
          </tr>
          <tr>
            <td>IE09</td>
            <td>Can't run any queries for flight dates in the past</td>
          </tr>
          <tr>
            <td>IE10</td>
            <td>Incorrect city_type. Expected one of ['C', 'A']</td>
          </tr>
          <tr>
            <td>IE19</td>
            <td>Incorrect region. Expected one of 'emea', 'apac', 'americas', 'edge'</td>
          </tr>
          <tr>
            <td>IE21</td>
            <td>Wrong currency</td>
          </tr>
          <tr>
            <td>IE22</td>
            <td>Not a valid cabin option. Expected one of 'E' , 'PE', 'SE', 'BC','FC', 'PFC'</td>
          </tr>
          <tr>
            <td>IE23</td>
            <td>Not a valid alliance. Expected one of *A, *S, *O</td>
          </tr>
          <tr>
            <td>IE24</td>
            <td>Travellers Type does not meet expected criteria. Should be a list having between 0 and 10 values</td>
          </tr>
          <tr>
            <td>IE27</td>
            <td>Num_results should be an integer between 50 and 1000</td>
          </tr>
          <tr>
            <td>IE29</td>
            <td>Invalid Traveller type</td>
          </tr>
          <tr>
            <td>IE30</td>
            <td>Incorrect value for single_pnr. Must be boolean</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
