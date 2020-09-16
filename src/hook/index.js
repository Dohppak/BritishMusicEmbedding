import { useContext, useEffect } from 'react';
import { NetworkContext } from '../context';

const useNetwork = () => {
    const [ networkState, setNetworkState ] = useContext(NetworkContext);

    useEffect(() => {
        loadGraphData();
    }, [networkState.activated])

    function setActivateNode(node){
        setNetworkState((prev) => ({
            ...prev,
            activated: node,
        }))
    }

    async function loadGraphData(){
        let nodes;
        let links;
        let types = "w2v";
        if (types === "contents"){
            nodes = await require('../data/contents_node.json');
            links = await require('../data/contents_link.json');
        }else if(types == "w2v"){
            nodes = await require('../data/w2v_node.json');
            links = await require('../data/w2v_link.json');
        }
        setNetworkState((prev) => ({
            ...prev,
            data: {
                nodes,
                links,
            },
        }))
    }

    function setActivateFunction(activateFunction){
        setNetworkState((prev) => ({
            ...prev,
            activateFunction
        }))
    }

    function changeActivate(node){
        if(node !== undefined){
            networkState.activateFunction(node);
        }
    }

    return {
        data: networkState.data,
        activated: networkState.activated,
        setActivateNode,
        loadGraphData,
        setActivateFunction,
        changeActivate,
    }
}

export default useNetwork