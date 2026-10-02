class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let sArray = [...s].sort();
        let tArray = [...t].sort();
        let counter:number = 0;

        if (s === t) return true;
        if (s.length == t.length) {
            for (let i = 0; i < sArray.length; i++) {
                if (tArray[i] == sArray[i]) {
                    counter++;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }

        if (counter == sArray.length) return true;
    }
}
