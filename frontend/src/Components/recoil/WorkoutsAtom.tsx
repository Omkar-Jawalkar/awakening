import { atom } from "recoil";
const workoutsAtom = atom({
    key: "workouts-atom",
    default: {},
});

export { workoutsAtom };
