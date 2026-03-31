import { Link } from "react-router"

export function RatenzahlungHerobanner({link, linkText, img, text, paypal=true, klarna=true}){
    return (
        <div className="RatenzahlungHerobanner" style={{backgroundImage: `url(https://cdn.shopify.com/s/files/1/0279/3095/1750/files/${img})`}}>
            <div className="RatenzahlungTextContent">
                {text}
                {link !== "" && (
                    <Link className="btn--primary" to={link}>{linkText}</Link>                    
                )}
            </div>
            <div className="RatenzahlungImages">
                { klarna && (
                    <img className="klarna" width={250} src={"https://cdn.shopify.com/s/files/1/0279/3095/1750/files/Klarna-Logo.png?v=1708904084"} />
                )}
                { paypal && (
                    <img className="paypal" width={250} src={"https://cdn.shopify.com/s/files/1/0279/3095/1750/files/paypal-784404_1280.webp?v=1708904082"} />
                )}
            </div>
        </div>
    )
}