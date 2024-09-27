// Get the canvas element
const ctx = document.getElementById('ticketsChart').getContext('2d');

// Dummy data for tickets handled per agent
const data = {
  labels: ['Agent 1', 'Agent 2', 'Agent 3'],
  datasets: [{
    label: 'Tickets Handled',
    data: [25, 40, 32],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    borderWidth: 1
  }]
};

// Chart configuration
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

// Render the chart
new Chart(ctx, config);
