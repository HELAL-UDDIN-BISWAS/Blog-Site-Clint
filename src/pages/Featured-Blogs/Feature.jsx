import React from 'react';
import DataTable from 'react-data-table-component';

const Feature = ({filter}) => {
    console.log(filter)
    const data = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
    ];

      const columns = [
        {
          name: filter._id,
          selector: 'id',
          sortable: true,
        },
        {
            name: filter.category,
            selector: 'id',
            sortable: true,
          },
      ];
    return (
        <div>
            <DataTable
                title="User Data"
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default Feature;