import ActionBackground from "../actionBackground/ActionBackground";
import { meditationsAtom } from "../recoil/meditationsAtom";
import { useRecoilState } from "recoil";
import ParticleBackground from "../common/ParticleBackground";

const Meditations = () => {
    const [meditations] = useRecoilState(meditationsAtom);

    const newMeditation = () => {
        return (
            <div>
                <ParticleBackground />
                {meditations?.data.map((meditation: any) => (
                    <h1>{meditation?.meditationName}</h1>
                ))}
            </div>
        );
    };

    return (
        <ActionBackground
            icon="1"
            title="Meditations"
            description="lorem ipsum"
            children={() => newMeditation()}
        />
    );
};

export default Meditations;
