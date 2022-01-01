import RelicReward from "./RelicReward";

interface RelicListUnit {
    _id: string;
    tier: string;
    relicName: string;
    state: string;
    rewards: RelicReward[];
}

export default RelicListUnit;