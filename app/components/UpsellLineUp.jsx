import {Image} from '@shopify/hydrogen';
import { Link } from 'react-router';
import { AddToCartButton } from './AddToCartButton';
import {useAside} from './Aside';

export function UpsellLineUp(){
  const {open} = useAside();

    return (
        <div className="UpsellLineUp mt-2 NormalSectionSize">
            <h2 className="text-center">
                Über 300 neue Nutzer im Monat. <br />
                Werde Teil der Qi Blanco® Revolution!
            </h2>
            <div className="UpsellWrapper">
                <div className="UpsellItem">
                    <div className="UpsellImage">
                    <img src="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/QiOne1.webp?v=1732874828" />
                    </div>
                    <div className="UpsellLabel mt-1 mb-1 text-center">
                        Kompakt. Innovativ. Stark
                    </div>
                    <h3>QiOne® 2 Pro</h3>
                    <p>Die effiziente <b>Gitterchip™</b> -Technologie reduziert die Auswirkungen von E-Smog und unterstützt ein Umfeld, das Klarheit und Fokus ermöglicht – perfekt für unterwegs und dem Büro.</p>
                    <Link prefetch="render" className='mt-2 UpsellLink' to={"/pages/qione"}>Mehr erfahren</Link>
                    <Link prefetch="render" className='mt-1 UpsellLink' to={"/products/qione-2-pro"}>Jetzt kaufen</Link>
                </div>
                <div className="UpsellItem">
                    <div className="UpsellImage">
                    <img src="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/QiBracelet1.webp?v=1732874909" />
                    </div>
                    <div className="UpsellLabel mt-1 mb-1 text-center">
                        Eleganz und Schutz - dein Support.
                    </div>
                    <h3>QiBracelet®</h3>
                    <p>Der elegant integrierte <b>Gitterchip™</b>  optimiert dein Umfeld und reduziert die Auswirkungen von E-Smog und 5G, das Wohlbefinden und Klarheit ermöglicht – für ein erfülltes Leben, zu Hause und unterwegs.</p>
                    <Link prefetch="render" className='mt-2 UpsellLink' to={"/pages/qibracelet"}>Mehr erfahren</Link>
                    <Link prefetch="render" className='mt-1 UpsellLink' to={"/products/qibracelet"}>Jetzt kaufen</Link>


                </div>
                <div className="UpsellItem">
                    <div className="UpsellImage">
                    <img src="https://cdn.shopify.com/s/files/1/0279/3095/1750/files/QiHome1.webp?v=1732874979" />
                    </div>
                    <div className="UpsellLabel mt-1 mb-1 text-center">
                        Gesundes Zuhause, produktives Umfeld.
                    </div>
                    <h3>QiHome® Air</h3>
                    <p>Der leistungsstärkste <b>Gitterchip™</b>  in unserem Sortiment schafft ein produktives Umfeld in deinem Zuhause und Büro, das dir helfen kann, dich wohler zu fühlen und in einer harmonischen Atmosphäre fokussierter zu arbeiten. </p>
                    <Link prefetch="render" className='mt-2 UpsellLink' to={"/pages/qihome"}>Mehr erfahren</Link>
                    <Link prefetch="render" className='mt-1 UpsellLink' to={"/products/qihome-air"}>Jetzt kaufen</Link>
                </div>
            </div>
        </div>
    )
}