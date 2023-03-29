import { writableArrays } from "./scrapes/scrapes";
import { FileManager } from "./util/util";

const fileManager = new FileManager();
writableArrays.forEach((wrtArr) => {
    fileManager.writeArray(wrtArr.path, wrtArr.array);
});