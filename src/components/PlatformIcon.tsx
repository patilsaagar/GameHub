import { Platform } from '@/hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { 
    FaWindows, 
    FaApple, 
    FaLinux, 
    FaPlaystation, 
    FaXbox, 
    FaAndroid } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe} from 'react-icons/bs'

interface PlatformIcon {
    platforms: Platform[]
}

type IconType = React.ElementType; // React component type

const PlatformIcon = ({ platforms }: PlatformIcon) => {
    const iconMapList: { [key: string]: IconType } = {
        pc: FaWindows,
        playStation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        iOS: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    };

    return (
        <HStack marginY={1}>
        {platforms.map((platform) => {
            // Make sure the slug is exactly matching the keys in the iconMapList
            const IconComponent = iconMapList[platform.slug.toLowerCase()]; // Force lowercase matching
            if (!IconComponent) {
                console.error(`No icon found for platform: ${platform.slug}`);
                return null;
            }
            return <Icon as={IconComponent} key={platform.id} />;
        })}
        </HStack>
    );
}

export default PlatformIcon;
