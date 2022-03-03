import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const SkeletonDiv = () => {
    return (
        <StyledSkeleton>
            <SkeletonTheme color="#999999" >
                <Skeleton width={"80%"} height={"10%"} style={{ marginTop: "1.5rem", marginBottom: "1rem" }} />
                <Skeleton width={"20%"} height={"10%"} style={{ marginBottom: "0.5rem" }} />
                <Skeleton style={{ height: "70%" }} />
            </SkeletonTheme>
        </StyledSkeleton>

    )
}

const StyledSkeleton = styled.div`
    position: relative;
    height: 40vh;
    box-shadow: 0 5px 20px rgba(0,0,0, 0.1);
    text-align: center;
    border-radius: 10px;
    background-color: white;

    @media (max-width: 1400px) {
        height: 40vh;
    }

    @media (max-width: 1208px) {
        height: 50vh;
    }

    @media (max-width: 750px) {
        height: 45vh;        
        margin-bottom: 1rem;

    }

    @media (max-width: 500px) {
        height: 30vh;
        margin-bottom: 2rem;

    }
`

export default SkeletonDiv;