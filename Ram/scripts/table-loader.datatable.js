$(document).ready(function () {
    $('#priority-properties').DataTable({
        dom: 'Bfrtip',
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