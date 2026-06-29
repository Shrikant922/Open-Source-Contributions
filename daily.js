import jsonfile from "jsonfile";
import moment from "moment";
import random from "random";
import simpleGit from "simple-git";

const path = "./data.json";

const run = async () => {
    const count = random.int(3, 5);
    console.log(`📅 Today: ${moment().format("YYYY-MM-DD")}`);
    console.log(`🎯 Making ${count} commits...\n`);

    for (let i = 1; i <= count; i++) {
        const data = { date: moment().format(), commit: i };
        await jsonfile.writeFile(path, data);
        await simpleGit().add([path]).commit(`daily commit ${i} of ${count} - ${moment().format("YYYY-MM-DD")}`);
        console.log(`  ✅ Commit ${i}/${count} done`);
    }

    console.log(`\n🚀 All ${count} commits made successfully!`);
};

run();
