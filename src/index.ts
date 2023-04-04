import { JSONToEdgeQL } from "./edgedb_transfer/JSONConverter";
import { writableArrays } from "./scrapes/scrapes";
import { FileManager } from "./util/util";
import * as fs from 'fs';

/*const fileManager = new FileManager();
writableArrays.forEach((wrtArr) => {
    fileManager.writeArray(wrtArr.path, wrtArr.array);
});*/

const testingObject: Object = {
    name: "Test Effect 2",
    description: "A testing effect that used to be JSON, but is now EdgeQL."
}

const result = JSONToEdgeQL(testingObject);

fs.writeFileSync('./edgeql_output/test_query.edgeql', result);