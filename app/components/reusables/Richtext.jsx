export function Richtext({text, alignment}){

const alignmentMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
}

    return (
        <div className={`Richtext NormalSectionSize ${alignmentMap[alignment] || ""}`}>
            {text}
        </div>
    )
}