function Slider({ className, icon, icon2, number, text, classSpan }) {
    return (
        <div className={className}>
            <div className="sliderTop">
                <i className={icon}></i>
                <i className={icon2}></i>
                <span className={classSpan}>{number}</span>
            </div>
            <h4 className="sliderTitle">{text}</h4>
        </div>
    )
}

export default Slider