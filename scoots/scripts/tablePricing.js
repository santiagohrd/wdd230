
// document.addEventListener('DOMContentLoaded', function () {
//     // Tu JSON con datos de tipo y precio
//     var jsonFile = 'https://santiagohrd.github.io/wdd230/scoots/data/rentalPricing.json';

//     // Obtener la referencia del tbody
//     var tablaBody = document.getElementById('tablaBody');

//     // Realizar una solicitud AJAX para cargar el JSON desde el archivo externo
//     fetch(jsonFile)
//         .then(response => response.json())
//         .then(data => {
//             // Iterar sobre el JSON y agregar filas a la tabla
//             data.rentalPricing.forEach(function (pricingCategory) {
//                 pricingCategory.reservation.forEach(function (reservationType) {
//                     reservationType.type.forEach(function (item) {
//                         var row = tablaBody.insertRow();
//                         var cell1 = row.insertCell(0);
//                         var cell2 = row.insertCell(1);
//                         var cell3 = row.insertCell(2);
//                         var cell4 = row.insertCell(3);

//                         cell1.innerHTML = item.name;
//                         cell2.innerHTML = item.max;
//                         cell3.innerHTML = '$' + item.halfDay.toFixed(2);
//                         cell4.innerHTML = '$' + item.fullDay.toFixed(2);
//                     });
//                 });
//             });
//         })
//         .catch(error => console.error('Error al cargar el archivo JSON:', error));
// });

// const data = 'https://santiagohrd.github.io/wdd230/scoots/data/rentalPricing.json';

const data = {
    "rentalPricing": [
        {
            "reservation": [
                {
                    "type": [
                        {
                            "name": "Honda Metro Scooter",
                            "max": 1,
                            "halfDay": 20,
                            "fullDay": 30                            
                        },
                        // ... (otros tipos)
                    ]
                }
            ]
        },
        {
            "walk-in": [
                {
                    "type": [
                        {
                            "name": "Honda Metro Scooter",
                            "max": 1,
                            "halfDay": 25,
                            "fullDay": 35                            
                        },
                        // ... (otros tipos)
                    ]
                }
            ]
        }
    ]
};


function generateTable(data) {
    const tableBody = document.getElementById('tablaBody');

    data.rentalPricing.forEach(pricing => {
        const category = Object.keys(pricing)[0];
        const prices = pricing[category][0].type;

        prices.forEach(price => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${price.name}</td>
                <td>${price.max}</td>
                <td>${category === 'reservation' ? price.halfDay : ''}</td>
                <td>${category === 'reservation' ? price.fullDay : ''}</td>
                <td>${category === 'walk-in' ? price.halfDay : ''}</td>
                <td>${category === 'walk-in' ? price.fullDay : ''}</td>
            `;
            tableBody.appendChild(row);
        });
    });
}

// Llamada a la función para generar la tabla
generateTable(data);