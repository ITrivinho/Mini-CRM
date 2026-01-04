console.log('Mini CRM Application Initialized');

// Get data from JSON file
fetch('./src/data/tickets.json')
  .then((response) => response.json())
  .then((data) => {
    console.log('Tickets Data:', data);
    renderTickets(data.tickets);
  })
  .catch((error) => {
    console.error('Error fetching tickets data:', error);
  });

function renderTickets(tickets) {
  const ticketsTable = document.getElementById('tickets-table');
  const tbody = ticketsTable.tBodies[0];

  tickets.forEach((ticket) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ticket.id}</td>
      <td>${ticket.title}</td>
      <td>${ticket.description}</td>
      <td>${ticket.status}</td>
      <td>${ticket.createdAt}</td>
      <td>${ticket.owner}</td>
      <td>${ticket.priority}</td>
    `;

    tbody.appendChild(row);
  });
}
