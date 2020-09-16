import React from "react";
import { CenterContainer, HeaderContainer, HeaderContents,HeaderContentSmall, Image, Logo} from '../../styles'
import logo from "../../img/logo.png"

export default function Template(){
    return (
        <>
        <CenterContainer>
        <HeaderContainer>
            <HeaderContents>
                Musical Word Embedding
            </HeaderContents>
            <HeaderContentSmall>
                Contents based Embedding
            </HeaderContentSmall>
        </HeaderContainer>
        <Image background={logo}/>
        </CenterContainer>
        </>
    );
  }