$(document).ready(function () {
    $('#priority-properties').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            {
                extend: 'colvis',
                className: 'myCustomButton', // Use your custom class here
                text: 'Select columns',
                postfixButtons: ['colvisRestore']
            }
        ]

    });
});
