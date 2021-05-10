import React from 'react';
import {DateTab,H3Tab,PTab} from './InfoElements';
import DataEdu from './DataEdu';
const InfoTab = ({lightText,darkText}) => {
    return (
        <div>
            {
                  DataEdu.map((data)=>{
                      return(
                        <div>
                            <H3Tab lightText={lightText}>{data.titulo}</H3Tab>
                            <DateTab darkText={darkText}>{data.fecha}</DateTab>
                            <PTab darkText={darkText}>{data.texto}</PTab>
                        </div>
                        )
                  })
            }
        </div>
    )
}

export default InfoTab
