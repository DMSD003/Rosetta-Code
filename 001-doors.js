// solution of the famous "100 doors problem" from freeCodeCamp
function getFinalOpenedDoors() {
    let doors = Array(100).fill(false);
    //[false , false , false ,...false]
    for (let i = 0; i < doors.length ; i++){
        for (let j = 0; j < doors.length ; j++){
            if ((i+1) % (j+1) === 0) {
                doors[i] = !doors[i];
            }
        }
    }
    return doors.reduce((acc , state , index) => {
        if(state === true){
            acc.push(index + 1);
        }
        return acc;
    }, []);
}