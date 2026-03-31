export function SingleImage({link, size}){
    if (size === "fullscreen"){
        return (
            <>
            <img className="SingleImageCentered" src={link} alt="" />
            </>
        )
    }
    return (
        <div className="NormalSectionSize">
            <img className="SingleImageCentered" src={link} alt="" />
        </div>
    )
    
}