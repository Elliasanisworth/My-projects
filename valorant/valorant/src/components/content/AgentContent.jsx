
import OmenIcon from '../../assets/Untitled.png';
import Initiator from '../../assets/initiator.png';
import Duelist from '../../assets/duelist.png';

import Omen from '../../assets/omen/Omen.png';
import dark from '../../assets/omen/dark-cover.png';
import shadow from '../../assets/omen/from-the-shadows.png' 
import paranoia from '../../assets/omen/paranoia.png' 
import steps from '../../assets/omen/shrouded-steps.png' 
import omenbg from '../../assets/omen/bg-omen.jpg' 

import viper from '../../assets/viper/Viper.png' 
import bg from '../../assets/viper/bg-viper.jpg'
import toxic from '../../assets/viper/toxic.png' 
import snake from '../../assets/viper/snake.png'
import poison from '../../assets/viper/poison.png'
import pit from '../../assets/viper/pit.jpg' 

import jett from '../../assets/jett/jett.jpg'
import updraft from '../../assets/jett/updraft.png'
import tailwind from '../../assets/jett/tailwind.png'
import cloundburst from '../../assets/jett/cloudburst.png'
import bladestorm from '../../assets/jett/bladestorm.png'
import jettbg from '../../assets/jett/jettbg.jpg'

import sova from '../../assets/sova/sova.jpg'
import shock from '../../assets/sova/shock.png'
import recon from '../../assets/sova/recon.png'
import owl from '../../assets/sova/owl.png'
import hunter from '../../assets/sova/hunter.png'
import sovabg from '../../assets/sova/sovabg.jpg'

import gekko from '../../assets/gekko/gekko.jpg'
import wingman from '../../assets/gekko/wingman.png'
import dizzy from '../../assets/gekko/dizzy.png'
import mosh from '../../assets/gekko/mosh.png'
import thrash from '../../assets/gekko/thrash.png' 
import gekkobg from '../../assets/gekko/gekkobg.jpg' 

const agentContent = {
    omen: {
        title: 'Omen',
        role: 'Controller',
        description: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.',
        icon: OmenIcon,
        pic: Omen,
        bg:omenbg,
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
        bg: bg,
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
        pic: jett,
        bg: jettbg,
        attribute: [
            { imgSrc:updraft, key: "q" },
            { imgSrc:tailwind, key: "e" },
            { imgSrc:cloundburst, key: "c" },
            { imgSrc: bladestorm, key: "x" }
        ]
    },
    sova: {
        title: 'Sova',
        role: 'Initiator',
        description: 'Sova is a master of reconnaissance and tracking. With his bow and arrow, he can reveal enemies’ positions and gain valuable intel to guide his team.',
        icon: Initiator,
        pic:sova,
        bg: sovabg ,
        attribute: [
            { imgSrc: shock, key: "q" },
            { imgSrc: recon, key: "e" },
            { imgSrc: owl, key: "c" },
            { imgSrc: hunter, key: "x" }
        ]
    },
    gekko: {
        title: 'Gekko',
        role: 'Duelist',
        description: 'Gekko is a versatile duelist who uses a combination of gadgets and abilities to outsmart opponents. His unconventional approach makes him a wildcard on the battlefield.',
        icon: Initiator,
        pic:gekko,
        bg: gekkobg,
        attribute: [
            { imgSrc: wingman, key: "q" },
            { imgSrc: dizzy, key: "e" },
            { imgSrc: mosh, key: "c" },
            { imgSrc: thrash, key: "x" }
        ]
    }
};

export default agentContent;