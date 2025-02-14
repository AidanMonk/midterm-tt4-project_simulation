import * as bootstrap from 'bootstrap';
import './fox_list.scss'; // Import the SCSS file

document.addEventListener("DOMContentLoaded", () => {
    // Mock fox data
    const foxes = [
        { code: '001', name: 'Red Fox', species: 'Vulpes vulpes', region: 'North America' },
        { code: '002', name: 'Arctic Fox', species: 'Alopex lagopus', region: 'Arctic Regions' },
        { code: '003', name: 'Fennec Fox', species: 'Vulpes zerda', region: 'Sahara Desert' },
        { code: '004', name: 'Swift Fox', species: 'Vulpes velox', region: 'North America' },
        { code: '005', name: 'Gray Fox', species: 'Urocyon cinereoargenteus', region: 'North America' }
    ];

    // Get the table body
    const tableBody = document.querySelector('#fox-table tbody');

    // Populate the table with fox data
    foxes.forEach(fox => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fox.code}</td>
            <td>${fox.name}</td>
            <td>${fox.species}</td>
            <td>${fox.region}</td>
            <td>
                <button class="btn btn-info btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Tooltip (Bootstrap)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Popover (Bootstrap)
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl);
    });
});
