
// Your Google Sheets API Key
const API_KEY = "AIzaSyCVOuM_u68idg-ImqQArZOxEb0mcGm4AGk";

// The Spreadsheet ID (from your example)
const SPREADSHEET_ID = "16aELv3csLKHH2bO-tci0cpiFaXE6sDzDsSsdAw3Ksnw";

// The range you want to read
const RANGE = "A2:B70";


function updatePrice(groupName, procedureName, newPrice) {
    // Find all group sections
    const groups = document.querySelectorAll('.panel-body.colorfulPanel');

    groups.forEach(group => {
        const groupTitle = group.querySelector('h3').innerText.trim();

        if (groupTitle === groupName) {
            // Find all procedures in the group
            const procedures = group.querySelectorAll('.row');

            procedures.forEach(procedure => {
                const procedureTitleElement = procedure.querySelector('.col-md-6.col-xs-6 h4');
                const priceElement = procedure.querySelector('.col-md-6.col-xs-6.text-right h4.priceTag');

                if (procedureTitleElement && priceElement) {
                    const procedureTitle = procedureTitleElement.innerText.trim();

                    if (procedureTitle === procedureName) {
                        // Update the price
                        priceElement.innerText = newPrice;
                    }
                }
            });
        }
    });
}


function formatDataToDictionary(data) {
    const result = {};
    let currentGroup = null;

    data.values.forEach(dataRow => {
        if (isGroupName(dataRow)) {
            // New group name found
            currentGroup = dataRow[0];
            result[currentGroup] = {};
        } else if (isService(dataRow, currentGroup)) {
            // Add procedure and price to the current group
            const [procedure, price] = dataRow;
            result[currentGroup][procedure] = sanitizeString(price);
        }
    });

    return result;
}

function isGroupName(dataRow) {
    return dataRow.length === 1 && dataRow[0] !== "";
}

function isService(dataRow, currentGroup) {
    return dataRow.length === 2 && currentGroup;
}

function sanitizeString(str) {
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-—]/gim, "");
    return str.trim();
}




async function fetchSheetData() {
    try {
        // Google Sheets API URL
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

        // Fetch data from Google Sheets API
        const response = await fetch(url);
        const data = await response.json();

        if (data.values) {
            const formattedData = formatDataToDictionary(data);

            for (const [groupName, services] of Object.entries(formattedData)) {
                for (const [serviceName, price] of Object.entries(services)) {
                    updatePrice(groupName, serviceName, price)
                }
            }

        } else {
            console.log("No data found.");
        }
    } catch (error) {
        console.error("Error fetching sheet data:", error);
    }
}

// Fetch data on page load
window.onload = fetchSheetData;