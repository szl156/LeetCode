let left = 0; minLen = Infinity; sum = 0
    for (let right = 0; right < nums.length; right++) {
        // 向右滑动窗口：right++
        sum += nums[right]
        // 如果窗口内的值>=target，则在可行解中寻找最小长度——>left++
        while (left <= right && sum >= target) {
            minLen = Math.min(minLen, right - left + 1)
            sum -= nums[left++]
        }
    }
    return minLen === Infinity ? 0 : minLen