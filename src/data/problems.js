const problems = [
    {   
        id:1,
        content:"Largest Element in an Array",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1"
    },
    {
        id:1,
        content:"Second Largest Element in an Array without sorting",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1"
    },
    {
        id:1,
        content:"Check if the array is sorted",
        difc:"easy",
        link:"https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/#:~:text=Input%3A%20nums%20%3D%20%5B2%2C,no%20rotation)%20to%20make%20nums."
    },
    {
        id:2,
        content:"Find the number that appears once, and other numbers twice",
        difc:"Medium",
        link:"https://leetcode.com/problems/single-number/description/"
    },
    {
        id:2,
        content:"Find missing number in an array",
        difc:"Medium",
        link:"https://leetcode.com/problems/missing-number/description/"
    },
    {
        id:2,
        content:"Maximum Consecutive Ones",
        difc:"Medium",
        link:"https://leetcode.com/problems/max-consecutive-ones/description/"
    },
    {
        id:2,
        content:"2Sum Problem",
        difc:"Medium",
        link:"https://leetcode.com/problems/two-sum/description/"
    },
    {
        id:3,
        content:"Reverse LL in group of given size K",
        difc:"hard",
        link:"https://leetcode.com/problems/reverse-nodes-in-k-group/"
    },
    {
        id:3,
        content:"Rotate a LL",
        difc:"hard",
        link:"https://leetcode.com/problems/rotate-list/description/"
    },
    {
        id:1,
        content:"Reverse Every Word in A String",
        difc:"easy",
        link:"https://leetcode.com/problems/reverse-words-in-a-string/description/"
    },
    {
        id:3,
        content:"Clone a Linked List with random and next pointer",
        difc:"hard",
        link:"https://leetcode.com/problems/copy-list-with-random-pointer/description/"
    },
    {
        id:1,
        content:"Peak element",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/peak-element/1?page=1&difficulty=Basic&sortBy=submissions"

    },
    {
        id:1,
        content:"Largest Element in Array",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1?page=1&difficulty=Basic&sortBy=submissions"

    },
    {
        id:1,
        content:"Array Leaders",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1?page=1&difficulty=Easy&sortBy=submissions"

    },
    {
        id:1,
        content:"Array Duplicates",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/find-duplicates-in-an-array/1?page=1&difficulty=Easy&sortBy=submissions"

    },
    {
        id:1,
        content:"Parenthesis Checker",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1?page=1&difficulty=Easy&sortBy=submissions"

    },
    {
        id:1,
        content:"Missing And Repeating",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1?page=1&difficulty=Easy&sortBy=submissions"

    },
    {
        id:1,
        content:"Equilibrium Point",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/explore?page=1&difficulty=Easy&sortBy=submissions"

    },
    {
        id:1,
        content:"Binary Search",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/binary-search-1587115620/1?page=1&difficulty=Easy&sortBy=submissions"

    },
    {
        id:1,
        content:"Check for BST",
        difc:"easy",
        link:"https://www.geeksforgeeks.org/problems/check-for-bst/1?page=1&difficulty=Easy&sortBy=submissions"

    },
    {
        id:2,
        content:"Kadane's Algorithm",
        difc:"Medium",
        link:"https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1?page=1&difficulty=Medium&sortBy=submissions"
    },
    {
        id:2,
        content:"Longest Substring Without Repeating Characters",
        difc:"Medium",
        link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
        id:2,
        content:"Max Consecutive Ones III",
        difc:"Medium",
        link:"https://leetcode.com/problems/max-consecutive-ones-iii/"
    },
    {
        id:2,
        content:"longest repeating character replacement",
        difc:"Medium",
        link:"https://leetcode.com/problems/longest-repeating-character-replacement/"
    },
    {
        id:2,
        content:"Binary subarray with sum",
        difc:"Medium",
        link:"https://leetcode.com/problems/binary-subarrays-with-sum/"
    },
    {
        id:2,
        content:"Count number of nice subarrays",
        difc:"Medium",
        link:"https://leetcode.com/problems/count-number-of-nice-subarrays/"
    },
    {
        id:2,
        content:"Number of substring containing all three characters",
        difc:"Medium",
        link:"https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/"
    },
    {
        id:3,
        content:"Flood fill",
        difc:"hard",
        link:"https://leetcode.com/problems/flood-fill/"
    },
    {
        id:3,
        content:"Surrounded Regions (dfs)",
        difc:"hard",
        link:"https://leetcode.com/problems/surrounded-regions/"
    },
    {
        id:3,
        content:"Word ladder - 1",
        difc:"hard",
        link:"https://leetcode.com/problems/word-ladder/"
    },
    {
        id:3,
        content:"Word ladder - 2",
        difc:"hard",
        link:"https://leetcode.com/problems/word-ladder-ii/"
    },
    {
        id:3,
        content:"Cycle Detection in Directed Graph (DFS)",
        difc:"hard",
        link:"https://leetcode.com/problems/course-schedule-ii/solutions/293048/detecting-cycle-in-directed-graph-problem/"
    },
    {
        id:3,
        content:"Course Schedule - I",
        difc:"hard",
        link:"https://leetcode.com/problems/course-schedule/"
    },
    {
        id:3,
        content:"Course Schedule - II",
        difc:"hard",
        link:"https://leetcode.com/problems/course-schedule-ii/"
    },
    {
        id:3,
        content:"Find eventual safe states",
        difc:"hard",
        link:"https://leetcode.com/problems/find-eventual-safe-states/"
    },
    {
        id:3,
        content:"Alien dictionary",
        difc:"hard",
        link:"https://leetcode.com/problems/alien-dictionary/editorial/"
    },
    {
        id:3,
        content:"Cheapest flights within k stops",
        difc:"hard",
        link:"https://leetcode.com/problems/cheapest-flights-within-k-stops/"
    },
    {
        id:2,
        content:"Maximum point you can obtain from cards",
        difc:"Medium",
        link:"https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/"
    },
    {
        id:2,
        content:"Jump Game",
        difc:"Medium",
        link:"https://leetcode.com/problems/jump-game/"
    },
    {
        id:2,
        content:"Insert Interval",
        difc:"Medium",
        link:"https://leetcode.com/problems/insert-interval/"
    },


]

export default problems