import {createRangeIterable} from "./createRangeIterable";
const iterator = createRangeIterable(1, 3+1) // 반복기 동장 안함
while (true){
    const {value, done} = iterator.next();
    if(done) break;
    console.log(value)
}