import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';

const DataTableComponent = ({ data, fetchData }) => {
  const tableRef = useRef(null);
  const dataTableRef = useRef(null);

  useEffect(() => {
    // Fetch data when component mounts
    if (data.length === 0) {
      
      fetchData();
    }
  }, [fetchData]);

  useEffect(() => {
    // Initialize DataTable when data changes
    if (tableRef.current && data.length > 0) {
      // Destroy existing DataTable if it exists
      

      // Initialize DataTable
      dataTableRef.current = $(tableRef.current).DataTable({
        paging: true,
        searching: true,
        ordering: true,
        data: data,
        columns: [
          { data: 'id' },
          { data: 'first_name' },
          { data: 'last_name' },
          { data: 'gender' },
          { 
            data: 'profile_picture',
            render: function(data) {
              return `<img src="${data}" alt="img" style="width: 10%;" />`;
            }
          },
          { data: 'country' }
        ]
      });

    
     
    }

    
  }, [data]);

  return (
    <div className="data-table-wrapper">
      <table ref={tableRef} className="table table-striped" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th width="10%">ID</th>
            <th width="15%">First Name</th>
            <th width="15%">Last Name</th>
            <th width="15%">Gender</th>
            <th width="25%">Profile</th>
            <th width="15%">Country</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default DataTableComponent;
