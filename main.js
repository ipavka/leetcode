const maximumWealth = function(accounts) {
    let result = 0;
    for (let i = 0; i < accounts.length; i++) {
        let count = accounts[i].reduce((a,b) => a+b, 0)
        if (count > result) result = count;
    }
    return result
};

console.log(maximumWealth([[1,2,3],[3,2,1]])) // 6
console.log(maximumWealth([[1,5],[7,3],[3,5]])) // 10
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])) // 17

console.log('*'.repeat(30))