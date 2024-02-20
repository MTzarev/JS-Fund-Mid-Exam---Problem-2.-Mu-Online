function muOnline (array) {
    let health = 100;
    let startHealth = 100;
    let bitcoins = 0;
    let newArr=array.split(`|`)
for (let i=0; i<newArr.length;i++){
    let index = (newArr[i]).split(` `)
    if (index.includes(`potion`)){
        if((health+Number(index[1])) <=100){
            health+=Number(index[1])
            console.log(`You healed for ${Number(index[1])} hp.\nCurrent health: ${health} hp.`);
        i++
        }
        else {
            health=health
            console.log(`You healed for ${Number(index[1])} hp.\nCurrent health: ${health} hp.`);
        
            i++
        }
    }else if (index.includes(`chest`)){
        bitcoins+=Number(index[1]);
        console.log(`You found ${Number(index[1])} bitcoins.`);
    i++
    }else if (!index.includes(`potion`) && !index.includes(`chest`)) {
        
        if((health - Number(index[1]))<=0){
            console.log (`You died! Killed by ${index[0]}.`)
            console.log(`Best room: ${newArr.indexOf(i)}`);
            
            break;
        }else if (health - Number(index[1])>0){
            health-=Number(index[1])
            console.log(`You slayed ${index[0]}.`);
            console.log(`You healed for ${Number(index[1])} hp.`);
            console.log(`Current health: ${health} hp.`);
        i++
        }
        i++
    }
    
}

}
//muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");