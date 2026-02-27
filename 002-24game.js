// solve24.js - 24 game solver
//solution for the 24 game, where you are given 4 numbers and you have to use them with basic arithmetic operations to get 24.
//  This is a brute-force solution that generates all possible combinations of the numbers and operations, and checks if any of them evaluate to 24.
// This exercice is provided by the Rosetta's code section from freeCodeCamp, and is a good example of how to use recursion and backtracking to solve a combinatorial problem.
function solve24(numStr){
    const nums = numStr.split('');
    const ops = ['+', '-', '*', '/'];
    const target = 24;
    //Genrate all permutations of given numbers
    const allNumPerms = (arr) => {
        if (arr.length === 1) return [arr];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i];
            let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
            for (let perm of allNumPerms(remaining)) {
                result.push([current, ...perm]);
            }
        }        return result;
    };

    // Generate all combinations of operations
    const combinationOps = [];
    for(let i of ops){
        for(let j of ops){
            for(let k of ops){
                combinationOps.push([i, j, k]);
            }
        }
    }

    const numPerms = allNumPerms(nums);

  // 3. Test each combination of numbers and operations with different parenthesizations
  for (let n of numPerms) {
    for (let o of combinationOps) {
      //  5 parenthesis structures
      const expressions = [
        `(((${n[0]}${o[0]}${n[1]})${o[1]}${n[2]})${o[2]}${n[3]})`,
        `((${n[0]}${o[0]}${n[1]})${o[1]}(${n[2]}${o[2]}${n[3]}))`,
        `(${n[0]}${o[0]}((${n[1]}${o[1]}${n[2]})${o[2]}${n[3]}))`,
        `(${n[0]}${o[0]}(${n[1]}${o[1]}(${n[2]}${o[2]}${n[3]})))`,
        `(((${n[0]}${o[0]}(${n[1]}${o[1]}${n[2]}))${o[2]}${n[3]}))`
      ];

      for (let exp of expressions) {
        try {
          // On évalue l'expression. 
          // Note: on utilise 23.999... car la division flottante peut être imprécise
          if (Math.abs(eval(exp) - 24) < 0.0001) {
            return exp;
          }
        } catch (e) {}
      }
    }
  }

  return "No existing solution";
}

console.log(solve24("4878")); // Exemple de sortie: ((7-8/8)*4)
