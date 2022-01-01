import Relic from '../data/structures/Relic';
import RelicListUnit from '../data/structures/RelicListUnit';

function RelicCard(props : any)
{
    const relic : Relic = props?.relic;
    const relicListUnit : RelicListUnit = props?.relicListUnit;
    let selected :Boolean = false;

    let relicTier : string;
    let relicName : string;

    if(relic != null)
    {
        relicTier = relic.tier;
        relicName = relic.name;
    }
    else if (relicListUnit != null)
    {
        relicTier = relicListUnit.tier;
        relicName = relicListUnit.relicName;
    }

    return (
        <div className='bg-slate-600 rounded-lg overflow-hidden text-white font-mono
                        hover:bg-slate-500 hover:cursor-pointer'
                        onClick={relicSelected}>
            <div className='w-full'>
                <img src={ getRelicImageURL(relicTier) } width={200} height={200} className='object-center'/>
            </div>
            <div className='bg-slate-700 text-center'>
                {relicTier} {relicName}
            </div>
        </div>
    );

    function relicSelected()
    {
        props?.setSelectedRelic(relicListUnit);
    }
}

function getRelicImageURL(tier : string)
{
    return process.env.PUBLIC_URL+'/images/relics/Relic' + tier + '.png';
}

export default RelicCard;