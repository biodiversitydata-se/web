const fs = require('fs');
const https = require('https');

/**
 * Fetch JSON from a URL.
 * @param {string} url
 * @returns {Promise<any>}
 */
function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', chunk => data += chunk);
            response.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

/**
 * Get value from object using JSON path (dot notation).
 * @param {object} obj
 * @param {string} path
 * @returns {any}
 */
function getValueByJsonPath(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

/**
 * Fetch value from URL and JSON path.
 * @param {string} url
 * @param {string} jsonPath
 * @returns {Promise<any>}
 */
async function fetchValueFromUrl(url, jsonPath) {
    const json = await fetchJson(url);
    return getValueByJsonPath(json, jsonPath);
}

/**
 * Main function to fetch data counts and save to JSON file.
 */
async function main() {
    const sources = [
        { 
            title: 'Occurrence Records', 
            source: 'https://records.biodiversitydata.se/ws/occurrences/search?q=*:*&facet=off&pageSize=0', 
            jsonPath: 'totalRecords',
            linkTo: 'https://records.biodiversitydata.se',
        },
        { 
            title: 'Datasets', 
            source: 'https://collections.biodiversitydata.se/ws/dataResource/count', 
            jsonPath: 'total',
            linkTo: 'https://collections.biodiversitydata.se/datasets',
        },
        { 
            title: 'Institutions', 
            source: 'https://collections.biodiversitydata.se/ws/institution/count', 
            jsonPath: 'total',
            linkTo: 'https://collections.biodiversitydata.se',
        },
        { 
            title: 'Collections', 
            source: 'https://collections.biodiversitydata.se/ws/collection/count', 
            jsonPath: 'total',
            linkTo: 'https://collections.biodiversitydata.se',
        },
        { 
            title: 'Images', 
            source: 'https://images.biodiversitydata.se/ws/search?q=*:*&max=0', 
            jsonPath: 'totalImageCount',
            linkTo: 'https://images.biodiversitydata.se',
        },
    ];

    const result = [];
    for (const { title, linkTo, source, jsonPath } of sources) {
        const item = { title: title, url: linkTo, count: 0 };
        result.push(item);
        try {
            item.count = await fetchValueFromUrl(source, jsonPath);
        } catch (err) {
            console.error(`Failed to fetch from ${source}:`, err.message);
        }
    }

    fs.writeFileSync('_data/data-counts.json', JSON.stringify(result, null, 2));
}

if (require.main === module) {
    main();
}
