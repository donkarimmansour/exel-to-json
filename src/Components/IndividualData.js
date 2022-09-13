import React from 'react'

export const IndividualData = ({individualExcelData , id}) => {
    return (
        <>
            <th>{id}</th>
            <th>{individualExcelData.FBID}</th>
            <th>{individualExcelData.First_NAME}</th>
            <th>{individualExcelData.Last_NAME}</th>
            <th>{individualExcelData.GENDER}</th>
            <th>{individualExcelData.LOCATION}</th>
            <th>{individualExcelData.HomeTown}</th>
            <th>{individualExcelData.BIRTHDAY}</th>
            <th>{individualExcelData.EMAIL}</th>
            <th>{individualExcelData.MOBILE}</th>
        </>
    )
}
