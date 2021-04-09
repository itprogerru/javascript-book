import {required} from "./required";
import {composeValidate} from "./composeValidate";
import {maxLength} from "./maxLength";

const str = "455555"

const req = required(str);
const max =  maxLength(5)(str);

console.log(composeValidate(required, maxLength(5))(str))
