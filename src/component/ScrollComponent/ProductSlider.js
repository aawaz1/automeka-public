import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ProductSlider = ({ children, title, desktopItemCount, superLargeDesktopItemCount, tabletItemCount, mobileItemCount, responsiveProp }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: superLargeDesktopItemCount ? superLargeDesktopItemCount : 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: desktopItemCount ? desktopItemCount : 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: tabletItemCount ? tabletItemCount : 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: mobileItemCount ? mobileItemCount : 1
        }
    };
    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
     
        return <button onClick={() => onClick()}>CustomRightArrow</button>;
      };
    //   <Carousel customRightArrow={<CustomRightArrow />} />
    return (
        <div style={{ width: "100%" }}>
            {title ? <div>{title}</div> : null}
          
            <div className="w-full flex justify-center">
                <Carousel customRightArrow={<CustomRightArrow />} className="flex justify-start w-[90%] max-w-[1200px]" responsive={responsiveProp ? responsiveProp : responsive}>
                    {
                        children
                    }
                </Carousel></div>
        </div>
    )
}

export default ProductSlider