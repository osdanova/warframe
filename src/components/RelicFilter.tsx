import { useState } from "react";
import RelicList from "../data/structures/RelicList";
import RelicListUnit from "../data/structures/RelicListUnit";

function RelicFilter(props : any)
{
    const relicList :RelicList = props?.relicList;
    const setRelicGrid = props?.setRelicGrid;

    const [tierFilter, setTierFilter] = useState<string>(null);
    const [nameFilter, setNameFilter] = useState<string>(null);

    return (
        <div className="p-8 text-white">
            <label>Tier: </label>
            <select onChange={(event) => filterRelicsByTier(event.target.value)}
             className="bg-slate-900">
                <option value="">-</option>
                <option value="Lith">Lith</option>
                <option value="Meso">Meso</option>
                <option value="Neo">Neo</option>
                <option value="Axi">Axi</option>
                <option value="Requiem">Requiem</option>
            </select>

            <label className="pl-8">Name: </label>
            <input className="bg-slate-900" onChange={(event) => filterRelicsByName(event.target.value)} />
        </div>
    );

    function filterRelicsByTier(value :string)
    {
        let relicsListUnits :RelicListUnit[] = returnListWithoutRepeats(relicList.relics);

        let relicsFiltered = relicsListUnits.filter(function(el){
            return value == "" || el.tier == value;
        });

        setRelicGrid(relicsFiltered);
    }
    
    function filterRelicsByName(value :string)
    {
        setNameFilter(value.toUpperCase());

        let relicsListUnits :RelicListUnit[] = returnListWithoutRepeats(relicList.relics);

        let relicsFiltered = relicsListUnits.filter(function(el){
            return value == "" || el.relicName.toUpperCase().includes(value.toUpperCase());
        });

        setRelicGrid(relicsFiltered);
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

export default RelicFilter;