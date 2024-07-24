import inquirer from "inquirer";
const enemies = ["Skeleton", "Zombie", "Warrior", "Assasin"];
let maxEnemyHealth = 75, //maximum amount of health an enemy can have
enemy_AttackDamage = 25, //max amount of damage enemy can do on our character
health = 100, //health of our character
attackDamage = 50, //damage we can do on enemies
numHealthPotions = 3, //character can heal up to 3 health potions
healthPotionHealAmount = 30, //amount of heal for each potion
healthPotionDropChance = 50, //everytime u kill an enemy ur health drops,percentage
rep = "-";
let running = true;
console.log("Welcome to the Dungeon!");
GAME: while (running) {
    console.log(rep.repeat(60));
    let enemyHealth = Number((Math.random() * 75).toFixed(0)); //it should be between 0 and 75..so generate a random number in between
    let enemy = enemies[Number((Math.random() * 3).toFixed(0))]; //3 is max length of array
    console.log(`\t # ${enemy} has appeared!#`);
    while (enemyHealth > 0) {
        console.log(`\t\t Your HP:${health}`);
        console.log(`\t\t ${enemy}'s HP:${enemyHealth}`);
        const answer = await inquirer.prompt([
            {
                name: "answer",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Health Potion", "Run"],
            },
        ]);
        if (answer.answer == "Attack") {
            let damageDelt = Number((Math.random() * attackDamage).toFixed(0)); //given to enemy
            let damageTaken = Number((Math.random() * enemy_AttackDamage).toFixed(0)); //u have received from enemy
            enemyHealth -= damageDelt; //
            health -= damageTaken; //u have lost health
            console.log(`\t # You struck the ${enemy} for ${damageDelt} #`);
            console.log(`\t * You received ${damageTaken} in retaliation! *`);
            if (health < 1) {
                console.log(`\t\tYou have taken too much damage, You are too weak to go on!\n`);
                break; //break while enemy health>0 loop
            }
        }
        ///////////////////////////////////
        else if (answer.answer == "Drink Health Potion") {
            if (numHealthPotions > 0) {
                health += healthPotionHealAmount;
                numHealthPotions--;
                console.log(`*\tYou drink a health potion and heal for ${healthPotionHealAmount}.*\n\t\t you now have ${health} HP.`);
            }
            else
                console.log(`You have no health potions left. Defeat enemies to get a chance to win one.`);
        }
        ///////////////////////////////
        else if (answer.answer == "Run") {
            console.log(`\t * You ran away from ${enemy}! *`);
            continue GAME; // now it will take another enemy in
        }
    }
    ///while enemyhealth>0 ends..this while will break out if our health becme zero or enemy's health
    //now check y we broke out of the while loop , either we or enemy health is zero
    if (health < 1) {
        // if you are dead
        console.log(`\t\t * You limp out of the dungeon, weak from battle*\n`);
        break;
    }
    ///if it comes here that means enemy is dead
    rep.repeat(60);
    console.log(`\t\t${enemy} was defeated!*`);
    console.log(`\t\tYou have ${health} HP left.`);
    ///now give the character a chance to refill health
    if (Number((Math.random() * 100).toFixed(0)) < healthPotionDropChance) {
        numHealthPotions++;
        console.log(`\t# ${enemy} dropped a health potion! #`);
        console.log(`\t\tYou now have ${numHealthPotions} potions!`);
    }
    rep.repeat(60);
    const answer2 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "What would you like to do now?",
            choices: ["Continue fighting", "Exit Dungeon"],
        },
    ]);
    if (answer2.answer === "Continue fighting")
        console.log(`You continue on your adventure!`);
    ///it will go to start of the game
    else {
        console.log(`You exit the dungeon, successfull from your adventures!`);
        break;
    }
} // main while
console.log(`Thanks for playing!`);
