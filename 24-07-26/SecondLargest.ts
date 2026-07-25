function secondHighest(string: string): number {
    let largest = -1;
    let secondlargest = -1;

    for(const s of string) {
        const num = Number(s);
        if(!isNaN(num)) {
            if(num > largest) {
                secondlargest = largest;
                largest = num;
            } else if(num < largest && num > secondlargest) {
                secondlargest = num;
            }
        }
    }
    return secondlargest;
};