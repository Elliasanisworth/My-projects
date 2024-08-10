
import OmenIcon from '../../assets/Untitled.png';
import Initiator from '../../assets/initiator.png';
import Duelist from '../../assets/duelist.png';

import Omen from '../../assets/omen/Omen.png';
import dark from '../../assets/omen/dark-cover.png';
import shadow from '../../assets/omen/from-the-shadows.png' 
import paranoia from '../../assets/omen/paranoia.png' 
import steps from '../../assets/omen/shrouded-steps.png' 

import viper from '../../assets/viper/Viper.png' 
import toxic from '../../assets/viper/toxic.png' 
import snake from '../../assets/viper/snake.png'
import poison from '../../assets/viper/poison.png'
import pit from '../../assets/viper/pit.jpg' 

import jett from '../../assets/'

const agentContent = {
    omen: {
        title: 'Omen',
        role: 'Controller',
        description: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.',
        icon: OmenIcon,
        pic: Omen,
        attribute: [
            { imgSrc:paranoia, key: "q" },
            { imgSrc:dark, key: "e" },
            { imgSrc: steps, key: "c" },
            { imgSrc: shadow, key: "x" }
        ]
    },
    viper: {
        title: 'Viper',
        role: 'Controller',
        description: 'Viper uses her tactical abilities to control the battlefield with poisonous gas and fire. She thrives in a strategic playstyle, setting traps and creating hazards for her enemies.',
        icon: OmenIcon,
        pic: viper,
        attribute: [
            { imgSrc: poison, key: "q" },
            { imgSrc:toxic, key: "e" },
            { imgSrc: snake, key: "c" },
            { imgSrc: pit, key: "x" }
        ]
    },
    jett: {
        title: 'Jett',
        role: 'Duelist',
        description: 'Jett is a nimble and agile duelist who excels at quick, unpredictable movements. She uses her speed and acrobatics to outmaneuver enemies and deal high damage.',
        icon: Duelist,
        attribute: [
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_de8544e323a51c9b8ff7ae8fca257e038a570819d-128x128.png", key: "q" },
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_de4012aeda506a8e77f2e83d48aa8c5c73a37b659-128x128.png", key: "e" },
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_d2790998724c94f38688c9c6c5d43c0712cae18ef-128x128.png", key: "c" },
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_dfed58cd5eb95f4e50b7b8230a150c3b686b82f78-128x128.png?auto=format&fit=crop&q=80&h=97&wcrop=center", key: "x" }
        ]
    },
    sova: {
        title: 'Sova',
        role: 'Initiator',
        description: 'Sova is a master of reconnaissance and tracking. With his bow and arrow, he can reveal enemies’ positions and gain valuable intel to guide his team.',
        icon: Initiator,
        attribute: [
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_de8544e323a51c9b8ff7ae8fca257e038a570819d-128x128.png", key: "q" },
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_de4012aeda506a8e77f2e83d48aa8c5c73a37b659-128x128.png", key: "e" },
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_d2790998724c94f38688c9c6c5d43c0712cae18ef-128x128.png", key: "c" },
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_dfed58cd5eb95f4e50b7b8230a150c3b686b82f78-128x128.png?auto=format&fit=crop&q=80&h=97&wcrop=center", key: "x" }
        ]
    },
    gekko: {
        title: 'Gekko',
        role: 'Duelist',
        description: 'Gekko is a versatile duelist who uses a combination of gadgets and abilities to outsmart opponents. His unconventional approach makes him a wildcard on the battlefield.',
        icon: Initiator,
        attribute: [
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_de8544e323a51c9b8ff7ae8fca257e038a570819d-128x128.png", key: "q" },
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_de4012aeda506a8e77f2e83d48aa8c5c73a37b659-128x128.png", key: "e" },
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_d2790998724c94f38688c9c6c5d43c0712cae18ef-128x128.png", key: "c" },
            { imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_dfed58cd5eb95f4e50b7b8230a150c3b686b82f78-128x128.png?auto=format&fit=crop&q=80&h=97&wcrop=center", key: "x" }
        ]
    }
};

export default agentContent;