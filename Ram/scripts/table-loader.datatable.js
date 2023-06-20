$(document).ready(function () {
    $('#priority-properties').DataTable({
        dom: 'Bfrtip', // This tells DataTables where to put the buttons
        buttons: [
            'colvis' // This tells it we want a 'colvis' button
        ]
    });
});