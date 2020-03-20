import React, {useContext} from 'react'
import {SmurfListContext} from '../Contexts/SmurfListContext'
import Smurf from '../components/Smurf'


const SmurfList = () => {
    const {smurfData} = useContext(SmurfListContext)
    return (
        smurfData.map(item => {
           return <Smurf key={item.id} {...item}/>
        })
    )
}

export default SmurfList