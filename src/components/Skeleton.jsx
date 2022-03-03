import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonDiv = () => {
    return (
        <SkeletonTheme color="#999999" >
            <Skeleton width={"80%"} height={"10%"} style={{ marginTop: "1.5rem", marginBottom: "1rem" }} />
            <Skeleton width={"20%"} height={"10%"} style={{ marginBottom: "0.5rem" }} />
            <Skeleton style={{ height: "70%" }} />
        </SkeletonTheme>

    )
}

export default SkeletonDiv;