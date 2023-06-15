// this will be replaced by backend API calls
const chartData = {
    charts: [
        {
            ctxIdentifier: 'doughnut',
            data: {
                type: 'pie',
                data: {
                    labels: ['Available', 'Turning', 'Renovating', 'Leased'],
                    datasets: [
                        {
                            label: 'Unit Status',
                            data: [12, 19, 3, 5],
                            backgroundColor: ['darkblue', 'pink', 'orange', 'lightgreen'],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    layout: {
                        padding: 0
                    }
                }
            }
        },
        {
            ctxIdentifier: 'line',
            data : {
                type: 'line',
                data: {
                    labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                    datasets: [
                        {
                            label: 'Total Properties',
                            data: [12, 19, 3, 5, 2, 3, 3, 3, 3, 3],
                            borderWidth: 1
                        },

                        {
                            label: 'Disposition',
                            data: [5, 8, 6, 15, 12, 14, 9, 6, 10, 8],
                            fill: false,
                            borderWidth: 1
                        },

                        {
                            label: 'Aquisition',
                            data: [2, 5, 2, 6, 10, 13, 5, 6, 1, 0],
                            fill: false,
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            }
        },

        {
            ctxIdentifier: 'bar',
            data: {
                type: 'bar',
                data: {
                    labels: [''],
                    datasets: [
                        {
                            label: 'High Priority (10⁺ days)',
                            data: [2],
                            backgroundColor: ['red'],
                            borderWidth: 1
                        },

                        {
                            label: 'Medium Priority (40⁺ days)',
                            data: [7],
                            backgroundColor: ['orange'],
                            borderWidth: 0
                        },

                        {
                            label: 'Low Priority (70⁺ days)',
                            data: [4],
                            backgroundColor: ['lightgreen'],
                            borderWidth: 0
                        },
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            }
        }
    ]   
}

// charts shown on page should depend on data retrieved from server
const loadedCharts = [];
const loadCharts = () => {
    for (chart of chartData.charts) {
        loadedCharts.push(new Chart(document.getElementById(`${chart.ctxIdentifier}-chart-canvas`), chart.data));
    }
}

// update charts on resize
const updateCharts = () => {
    for (chart of loadedCharts) {
        chart.destroy();
    }
    loadCharts();
}

// to be merged with other window events
loadCharts();
window.onresize = updateCharts;