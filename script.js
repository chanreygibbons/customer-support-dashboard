// Simulate average response time
document.getElementById('response-time').innerText = (Math.random() * 10 + 5).toFixed(2) + ' mins';

// Generate mock data for charts
const ticketData = [15, 20, 12, 18, 25];
const satisfactionData = [80, 90, 85, 70, 75];

// Chart.js for satisfaction and tickets handled
const ctx1 = document.getElementById('satisfaction-chart').getContext('2d');
const ctx2 = document.getElementById('tickets-chart').getContext('2d');

new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'],
        datasets: [{
            label: 'Customer Satisfaction (%)',
            data: satisfactionData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E'],
        datasets: [{
            label: 'Tickets Handled',
            data: ticketData,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    }
});

