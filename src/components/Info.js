import React from "react";

import LogoIcon from "./../constants/Logo";
import SmallShapeIcon from './../constants/SmallShape';
import LargeShapeIcon from './../constants/LargeShape';

//Here is the design of the part that appears on the left of the register screen.
export default function Info({mode}) {
  return (
    <div className="infoContainer" mode={mode ? "light":"dark"}>
        <LogoIcon width="250" height="105" color="#444AFF"/>
        <span mode={mode ? "light":"dark"}>YAZILIM PATİKALARI</span>
        <p mode={mode ? "light":"dark"}> Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir.
            Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler
            kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar.
            Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı
            olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler. </p>
        <div className="shapes">
            <div className="smallShape">
                <SmallShapeIcon width="275" height="104" color={mode? "#444AFF" : "#FFBF5E"}/>
            </div>
            <div className="largeShape">
                <LargeShapeIcon width="400" height="118" color={mode? "#444AFF" : "#FFBF5E"}/>
            </div>
        </div>
    </div>
  );
}
