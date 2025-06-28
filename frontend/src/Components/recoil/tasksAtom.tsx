import { atom } from "recoil";
const tasksAtom = atom({
    key: "tasks-atom",
    default: {},
});

export { tasksAtom };
