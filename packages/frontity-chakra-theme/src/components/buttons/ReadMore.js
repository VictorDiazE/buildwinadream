import svg from '../../assets/read_more.svg';
import FrontityLink from "../link";

const ReadMore = ({url}) => {
    return (
        <>
        	<FrontityLink variant="base" link={url} paddingTop='24px' position='absolute' bottom="48px" left="calc(50% - 56px)">
                <img src={svg} />
			</FrontityLink>
        </>
    )
    return 
}

export default ReadMore;