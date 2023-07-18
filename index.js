function countVietnameseChars(input) {
    let count = 0;

    const vietnameseChars = {
        aw: 'ă',
        aa: 'â',
        dd: 'đ',
        ee: 'ê',
        oo: 'ô',
        ow: 'ơ',
        w: 'ư'
    };
    const regex = new RegExp(Object.keys(vietnameseChars).join('|'), 'g');

    const matches = input.match(regex);

    if (matches) {
        count = matches.length;
    }

    return count;
}

console.log(countVietnameseChars('hfdawhwhcoomdd'));