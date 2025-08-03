export function csvToJson(input: string, separator = ',') { 
    const lines = input.trim().split('\n');
    const headers = lines[0].split(separator).map(header => header.trim());

    const jsonArray = lines.slice(1).map(line => {
        const values = line.split(separator).map(value => value.trim());
        const jsonObject: Record<string, string> = {};  
        headers.forEach((header, index) => {
            jsonObject[header] = values[index] || '';
        });

        return jsonObject;
    });
    
    return jsonArray;
 }