import React from 'react'
import { IndividualData } from './IndividualData'

export const Data = ({excelData}) => {
    return excelData.map((individualExcelData , index)=>(
        <tr key={individualExcelData.FBID}>
            <IndividualData individualExcelData={individualExcelData} id={index + 1}/>
        </tr>        
    ))
}
