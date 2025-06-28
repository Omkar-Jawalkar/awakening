import { atom } from "recoil";
const meditationsAtom = atom({
    key: "meditations-atom",
    default: {
        name: "",
        totalXpValue: 0,
        totalCompletedPercentage: 0,
        totalPercentage: 0,
        data: [],
    },
});

export { meditationsAtom };
