const getRandom = (arr, num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * arr.length);
       if(res.indexOf(arr[random]) !== -1){
          continue;
       };
       res.push(arr[random]);
       i++;
    };
    return res;
 };

const Constants = {
    SEARCH_WORDS: ["funny","amazing","tennis","animals","best","awesome","top", "beautiful mountain media", "80's music","try not to laugh","incredible"]
  }

export {getRandom, Constants};
