export function* rangeGenerator(from, to) {
    let currentValue = from;
    while (currentValue < to) {
        yield currentValue++;
    }
}