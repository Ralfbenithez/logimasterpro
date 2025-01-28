export const initChart = (ctx, labels, data) => {
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                data,
                backgroundColor: ['#2C3E50', '#18BC9C', '#F1C40F', '#3498DB', '#E74C3C', '#9B59B6']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
};
