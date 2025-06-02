// First, let's fetch and analyze the CSV data
const csvUrl = './index.csv';

async function fetchAndAnalyzeData() {
    try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();

        console.log('CSV Data Preview:');
        console.log('================');

        // Split into lines and show first 10 rows
        const lines = csvText.split('\n');
        lines.slice(0, 10).forEach((line, index) => {
            console.log(`Row ${index}: ${line}`);
        });

        console.log(`\nTotal rows: ${lines.length}`);

        // Parse CSV to understand the data structure
        const rows = lines.slice(1).filter(line => line.trim()); // Skip header and empty lines
        const participants = rows.map(row => {
            const columns = row.split(',').map(col => col.trim().replace(/"/g, ''));
            return {
                id: columns[0],
                name: columns[1],
                college: columns[2],
                events: columns[3]
            };
        });

        console.log('\nSample parsed data:');
        console.log('==================');
        participants.slice(0, 5).forEach(p => {
            console.log(`ID: ${p.id}, Name: ${p.name}, College: ${p.college}, Events: ${p.events}`);
        });

        // Analyze event patterns
        const eventPatterns = new Set();
        participants.forEach(p => {
            if (p.events) {
                eventPatterns.add(p.events);
            }
        });

        console.log('\nUnique event patterns:');
        console.log('=====================');
        Array.from(eventPatterns).slice(0, 10).forEach(pattern => {
            console.log(pattern);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndAnalyzeData();