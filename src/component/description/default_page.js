import React from "react";
import Template from "./template"
import info from "../../img/info.png"
import { Stat, DescriptionContainer, SmallCase,MiddleCase,HighCase } from '../../styles';

export default function DefaultPage(){
  return (
        <>
        <DescriptionContainer>
        <Template/>
            <SmallCase>
                Project
            </SmallCase>
            <HighCase>
                British Music Space
            </HighCase>

            <SmallCase>
                Describtion
            </SmallCase>

            <MiddleCase>
            Music search that considers both content and context is expected to be of great help to our music search experience in the future.<br/><br/>
            <b>60’s</b> the beatles, rolling stones, the who, pink floyd, cream<br/>
            <b>70’s</b> led zeppelin, deep purple, david bowie, sex pistols<br/>
            <b>80’s</b> duran duran, joy division, new order,<br/>
            <b>90’s</b> the stone roses, happy mondays, suede, blur, pulp, oasis<br/>
            <b>00’s</b> verve, radiohead, travis, elbow, coldplay<br/>
            <br/>
            We want to collect data on artists from each of the five eras and visualize them from different deep learning perspectives.
            </MiddleCase>

            <SmallCase>
                Paper Link
            </SmallCase>
            <MiddleCase>
                <a href="https://mac.kaist.ac.kr/">
                https://mac.kaist.ac.kr/
                </a>
            </MiddleCase>

            <SmallCase>
                Color Coding
            </SmallCase>
            <Stat background={info}/>


        </DescriptionContainer>
        </>

  );
}