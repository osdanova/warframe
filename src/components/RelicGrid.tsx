import { useState } from "react";
import RelicListUnit from "../data/structures/RelicListUnit";
import RelicCard from "./RelicCard";

function RelicGrid(props : any)
{
    const relics :RelicListUnit[] = props?.relicGrid;

    if(relics == null || relics.length == 0)
    {
        console.log('relics not found');
        return(<div></div>);
    }
    else
    {
        return (
            <div className="h-full overflow-auto">
                <div className="grid grid-cols-5 gap-5 p-10">
                    {relics.map((relic) => (
                        <RelicCard relicListUnit={relic} setSelectedRelic={props?.setSelectedRelic}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default RelicGrid;