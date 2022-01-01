import RelicReward from "./RelicReward";

interface Relic {
    tier: string;
    name: string;
    rewards: RelicRewards;
}

interface RelicRewards {
    Intact: RelicReward[];
    Exceptional: RelicReward[];
    Flawless: RelicReward[];
    Radiant: RelicReward[];
}

export default Relic;