import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

export const SkeletonDiv = () => {
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


export const SkeletonSlider = () => {
    return (
        <StyledSkeletonSlider>
            <Skeleton width={"100%"} height={"100%"} />
        </StyledSkeletonSlider>

    )
}

const StyledSkeletonSlider = styled.div`
    height: 40vh;

    @media (max-width: 550px) {
        height: 30vh;
    }
`

export const SkeletonH2 = () => {
    return (
        <StyledSkeletonH2>
            <Skeleton width={"100%"} height={"50px"} style={{ marginBottom: "3rem" }} />
        </StyledSkeletonH2>

    )
}

const StyledSkeletonH2 = styled.div`
    width: 25vw;

    @media (max-width: 1200px) {
        width: 35vw;
    }

    @media (max-width: 600px) {
        width: 70vw;
    }

`

export const SkeletonSearch = () => {
    return (
        <StyledSkeletonSearch>
            <SkeletonTheme color="#999999" >
                <Skeleton width={"40vw"} height={"40px"} style={{ marginRight: "2rem" }} />
                <Skeleton width={"10vw"} height={"40px"} />
            </SkeletonTheme>
        </StyledSkeletonSearch>
    )
}

const StyledSkeletonSearch = styled.div`
    /* width: 100%; */
    display: flex;
    justify-content: center;
    margin: 3rem 0;
`

