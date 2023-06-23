const ctx = document.querySelector('#line_chart')

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



const data = {
    labels: month,
    datasets: [
        {
            data: [1, 2, 5, 4, 9, 3, 9, 2, 6, 10, 7, 8],
            backgroundColor: 'transparent',
            borderColor: '#6D7EFF',
            pointerBorderColor: 'transparent',
            pointBorderWidth: 2

        }
    ]
};
const options = {

    plugins: {
        legend: false
    },
    scales: {
        x: {
            grid: {
                display: false
            },


        },
        y: {
            grid: {
                display: false
            },
            min: 0,
            max: 12,
            ticks: {
                stepSize: 2,
                callback: value => value + 'K'
            },

        }
    }
}
new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
})