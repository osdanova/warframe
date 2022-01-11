import { useState, useEffect } from "react";
import * as DataFetcher from '../lib/DataFetcher';
import RelicList from "../data/structures/RelicList";
import RelicListUnit from "../data/structures/RelicListUnit";
import RelicGrid from "./RelicGrid";
import RelicData from "./RelicData";
import RelicFilter from "./RelicFilter";

function RelicLayout(props : any)
{
    // Relic list from API call
    const [relicList, setRelicList] = useState<RelicList>(null);
    const [relicGrid, setRelicGrid] = useState<RelicListUnit[]>(null);
    const [selectedRelic, setSelectedRelic] = useState<RelicListUnit>(null);

    // First load
    useEffect(() =>
    {
        firstLoad();
    }, [])

    return (
        <div className="h-full overflow-hidden">
            <RelicFilter relicList={relicList} setRelicGrid={setRelicGrid}/>
            <div className="flex h-full overflow-hidden">
                <div className="w-2/5">
                    <RelicData relic={selectedRelic}/>
                </div>
                <div className="w-3/5">
                    <RelicGrid relicGrid={relicGrid} setSelectedRelic={setSelectedRelic}/>
                </div>
            </div>
        </div>
    );

    async function firstLoad()
    {
        // Get the relics from the API call
        const relicListFetched : RelicList = await DataFetcher.fetchRelicList();

        if(relicListFetched?.relics != null)
        {
            // Once the relics are fetched, store them
            setRelicList(relicListFetched);
            let relicsWithoutRepeats :RelicListUnit[] = returnListWithoutRepeats(relicListFetched.relics);
            setRelicGrid(relicsWithoutRepeats);
            setSelectedRelic(relicsWithoutRepeats[0]);
        }
    }

    function returnListWithoutRepeats(relicList :RelicListUnit[]) :RelicListUnit[]
    {
        let relicKeys :string[] = [];
        let relicListFiltered :RelicListUnit[] = [];
        relicList.forEach(relic => {
            let key = relic.tier + relic.relicName;
            if (!relicKeys.includes(key)){
                relicKeys.push(key);
                relicListFiltered.push(relic);
            }
        });
        return relicListFiltered;
    }
}

export default RelicLayout;