import RelicReward from "../data/structures/RelicReward";

function RelicRewardCard(props : any)
{
    const relicReward : RelicReward = props?.relicReward;

    return (
        <div className='bg-slate-700 rounded-lg overflow-hidden text-white font-mono p-4'>
            <div className="font-bold text-xl">
                {relicReward.itemName}
            </div>
            {relicReward.rarity} [{relicReward.chance} %]
        </div>
    );
}

function getRelicImageURL(tier : string)
{
    return process.env.PUBLIC_URL+'/images/relics/Relic' + tier + '.png';
}

export default RelicRewardCard;