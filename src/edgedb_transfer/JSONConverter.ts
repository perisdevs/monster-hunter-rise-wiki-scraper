export function JSONToEdgeQL(json: Object): string {

    const keyStrings: string[] = [];
            
    for (let keyString in json) {
        let key = keyString as keyof typeof json;  
        let newString = `${keyString} := "${json[key]}",`;
        keyStrings.push(newString);
    }

    let edgeStatement = `insert StatusEffect {`;

    keyStrings.forEach((keyString) => {
        edgeStatement = edgeStatement.concat(`\n\t${keyString}`);
    });

    edgeStatement = edgeStatement.concat(`\n};`);

    return edgeStatement;
}

