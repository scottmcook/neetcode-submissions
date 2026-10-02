class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    let storageSet = new Set()
    for (let i:number = 0; i < nums.length; i++) {
        if (storageSet.has(nums[i])) {
            return true;
        }
        else storageSet.add(nums[i])
    }
    return false;
  }
}
