import { useState, useEffect } from "react";
import RelicListUnit from "../data/structures/RelicListUnit";
import RelicRewardCard from "./RelicRewardCard";

function RelicData(props : any)
{
    let relic :RelicListUnit = props?.relic;

    return(
        <div className="h-full w-full p-4">
            <div className='h-full w-full p-8 rounded-lg bg-slate-600 object-center'>
                {relic != null &&
                    <div className="grid grid-cols-1 gap-5">
                        <RelicRewardCard relicReward={relic.rewards[0]}/>
                        <RelicRewardCard relicReward={relic.rewards[1]}/>
                        <RelicRewardCard relicReward={relic.rewards[2]}/>
                        <RelicRewardCard relicReward={relic.rewards[3]}/>
                        <RelicRewardCard relicReward={relic.rewards[4]}/>
                        <RelicRewardCard relicReward={relic.rewards[5]}/>
                    </div>
                } 
            </div>
        </div>
    );
}

function getRelicImageURL(tier : string)
{
    return process.env.PUBLIC_URL+'/images/relics/Relic' + tier + '.png';
}

export default RelicData;