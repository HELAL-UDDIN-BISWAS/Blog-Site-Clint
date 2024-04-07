import React from 'react';
// import DataTable from 'react-data-table-component';

const Feature = ({filter}) => {
    console.log(filter)
    // const data = [
    //     { id: 1, name: 'John', age: 30 },
    //     { id: 2, name: 'Jane', age: 25 },
    // ];

      // const columns = [
      //   {
      //     name: filter._id,
      //     selector: 'id',
      //     sortable: true,
      //   },
      //   {
      //       name: filter.category,
      //       selector: 'id',
      //       sortable: true,
      //     },
      // ];
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>{filter?.category}</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
         </tbody>
  </table>
</div>
        </div>
    );
};

export default Feature;