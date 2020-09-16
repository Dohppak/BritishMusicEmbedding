import React, { useState, useEffect } from 'react';
import useNetwork from '../../hook';
import D3Graph from '../../D3Graph/D3Graph';
import Search from '../search';
import { createConfig } from '../../D3Graph/D3Graph.config';
import { RenderArea } from '../../styles';


export default function Main() {
    const { setActivateNode, setActivateFunction, loadGraphData, data } = useNetwork();
    const [ loading, setLoading ] = useState(true);
    const [ config, setConfig ] = useState({
    });
    const graphConfig = createConfig({
        isDarkTheme: true,
        node: {
            symbolType: 'circle'
        },
        link: {
            opacityKey: 'strength',
            highlightColor: '#80808080'
        },
        graph: {
            symbolKey: 'group',
            colorKey: 'colorKey',
            sizeKey: 'group',
            symbolMapper: {
                'track': 'circle',
                'artist': 'circle',
            },
            colorMapper: {
                '1960': '#3288bd',
                '1970': '#99d594',
                '1980': '#e6f598',
                '1990': '#fee08b',
                '2000': '#fc8d59',
                'track': "#80808080",
            },
            sizeMapper: {
                'artist': 80,
                'track': 20,
            }
        }
    });

    useEffect(() => {
        handleLoadData();
    }, [])

    async function handleLoadData(){
        setConfig(graphConfig);
        await loadGraphData();
        setLoading(false);
    }
    
    return (
        <RenderArea>
            <Search />
            <D3Graph 
                data={data}
                config={config}
                loading={loading}
                setActivateNode={setActivateNode}
                setActivateFunction={setActivateFunction}
            />
        </RenderArea>
    )

}