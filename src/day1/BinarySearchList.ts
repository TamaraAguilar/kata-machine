export default function bs_list(haystack: number[], needle: number): boolean {
    let lower_bound: number = 0;
    let upper_bound: number = haystack.length;

    while (lower_bound < upper_bound) {
        const middle: number = Math.floor(
            lower_bound + (upper_bound - lower_bound) / 2,
        );

        const value = haystack[middle];

        if (value === needle) return true;
        else if (value > needle) {
            upper_bound = middle;
        } else {
            lower_bound = middle + 1;
        }
    }

    return false;
}
