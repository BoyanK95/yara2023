function jsonToCsv(jsonData) {
    let csv = ''

    //Get header
    let headers = Object.keys(jsonData[0])
    csv += headers.join(',') + '\n'

    //Get the rows
    jsonData.forEach((row) => {
        let rowData = headers.map(header => {
            let cellData = row[header]

            if (cellData.toString().indexOf(',') !== -1) {
                cellData = `"${cellData}"`
            }

            return cellData
        })
        csv += rowData.join(',') + '\n'
    });

    return csv
}

const fs = require('fs')

fs.readFile('./DUMMY_DATA.json' , 'utf-8' , (err, data) => {
    if (err) {
        throw err
    }

    const dummyData = JSON.parse(data)
    console.log(jsonToCsv(dummyData));
})