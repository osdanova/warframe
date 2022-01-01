import Relic from "../data/structures/Relic";
import RelicList from "../data/structures/RelicList";

const relicUrl = "https://drops.warframestat.us/data/relics";

export async function fetchRelicList() : Promise<RelicList>
{
    try
    {
        const response = await fetch(getRelicListURL());
        const relicList : RelicList = await response.json();
        return relicList;
    }
    catch(error)
    {
        console.log('Error fetching relic list: ' + error);
    }
}

export async function fetchRelic(tier : String, name : String)
{
    try
    {
        const response = await fetch(getRelicURL(tier,name));
        const data = await response.json();
        const relic : Relic = JSON.parse(data);
        return relic;
    }
    catch(error)
    {
        console.log('Error fetching relic: ' + error);
    }
}

function getRelicURL(tier : String, name : String) {
    return relicUrl + "/" + tier + "/" + name + ".json";
}

function getRelicListURL() {
    return relicUrl + ".json";
}