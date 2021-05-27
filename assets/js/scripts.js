var columnDefs = [{
      headerName: 'Make',
      field: 'make',
      sortable: true,
      filter: true
   },
   {
      headerName: 'Model',
      field: 'model',
      sortable: true,
      filter: true
   },
   {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: true
   },
];

var gridOptions = {
   columnDefs: columnDefs,
   rowSelection: 'multiple'
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
   var gridDiv = document.querySelector('#myGrid');
   new agGrid.Grid(gridDiv, gridOptions);

   agGrid.simpleHttpRequest({
      url: 'https://www.ag-grid.com/example-assets/small-row-data.json'
   }).then(function (data) {
      gridOptions.api.setRowData(data)
   })
});