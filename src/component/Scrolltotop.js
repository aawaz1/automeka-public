import useScrollTop from "./customHooks/useScrollToTop";

const ScrollToTop = () => {
    const { stick, onClickHandler } = useScrollTop();
    if (stick) {
        return (
            <button
                aria-label="Scroll to top"
                type="button"
                className="border border-gray-200"
                onClick={onClickHandler}
            >
                <i className="fa fa-angle-double-up"></i>
            </button>
        );
    }
    return null;
};

export default ScrollToTop;