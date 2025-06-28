import { useNavigate } from "react-router-dom";
import ActionBackground from "../actionBackground/ActionBackground";

import { useQuery } from "@tanstack/react-query";
import { getHomepageData } from "../../api/getHomePageData";
import { capatializeFirstLetter } from "../../Utils/utils";
import { useEffect } from "react";
import { meditationsAtom } from "../recoil/meditationsAtom";
import { workoutsAtom } from "../recoil/WorkoutsAtom";
import { tasksAtom } from "../recoil/tasksAtom";
import { useRecoilState } from "recoil";

const Home = () => {
    const { data } = useQuery({
        queryKey: ["homepageData"],
        queryFn: getHomepageData,
        staleTime: Infinity,
    });
    const [tasks, setTasksAtom] = useRecoilState(tasksAtom);
    const [meditations, setMeditationsAtom] = useRecoilState(meditationsAtom);
    const [workouts, setWorkoutsAtom] = useRecoilState(workoutsAtom);

    const navigate = useNavigate();

    const setDataInRecoil = () => {
        setTasksAtom(data[0]);
        setMeditationsAtom(data[1]);
        setWorkoutsAtom(data[2]);
    };

    useEffect(() => {
        if (data?.length > 0) setDataInRecoil();
    }, [data]);

    console.log("meditations", meditations);

    const homeChildren = () => {
        return (
            <div className="flex  gap-4 flex-col justify-center items-center">
                {data?.map((item: any) => {
                    return (
                        <div
                            onClick={() => navigate(`/home/${item?.name}s`)}
                            className="z-10 px-4 py-2 hov   er:bg-[#1f1531] transition-all w-lg border-1 cursor-pointer flex justify-between items-start border-violet-400  text-amber-100"
                        >
                            <div>
                                <h1 className="">
                                    {capatializeFirstLetter(item?.name)}
                                </h1>
                                <p className="text-xs text-violet-300">
                                    Daily Quest
                                </p>
                            </div>
                            {/* <CircularProgress /> */}
                            65%
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <ActionBackground
            title="Quests"
            icon="!!"
            description=""
            children={() => homeChildren()}
        />
    );
};

export default Home;
