
/**
 * Create Clickup WebHooks
 * 
 * for sync with Github
 */
const clickup_api = require("clickup_api");
require("dotenv").config();

const Clickup = new clickup_api(process.env.CLICKUP_ACCESS_TOKEN);

const BASE_URL = process.env.CLICKUP_HOOK_BASEURL + "api/";

const TEAM_ID = "36935308";
const SPACE_ID = "90070148607";
const LIST_ID = "900700775404";

const WEBHOOKS = [
    {
        endpoint: BASE_URL + "hello",
        events: ["taskCreated", "taskUpdated", "taskDeleted"],
        space_id: SPACE_ID,
        list_id: LIST_ID
    }
]

async function run(){
    for(const hook of WEBHOOKS){
        await Clickup.Webhooks.create_webhook(TEAM_ID, hook);
    }
}

run();