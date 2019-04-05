import React from 'react'
import styled from 'styled-components'


const StyledTable = styled.table`
  width: 100%; 
  padding: auto;
  border-radius: 10px;
`
const StyledTr = styled.tr`
background-color: #657b83;
  border-radius: 10px;
`
const StyledTd = styled.td`
  background-color: #cb4b16;
  border-radius: 10px;
`
/**
 *
 * @param arrObj , array de objetos que tienen que ser todos iguales.
 * @returns {*} JSX element que contiene <thead>
 *                                          <tr>
 *                                              <td>key<td>
 *                                           </tr>
 */
const GenericThead = ({ arrObj }) => {
    //assert is array and have at least one object inside.
    if (!Array.isArray(arrObj) || !arrObj.length > 0) {
        return
    }
    //extract first element keys.
    const keys = Object.keys(arrObj[0])

    //now we can construct the thead
    const Thead =
        <thead>
        <StyledTr>
            {keys.map((key, index) => <td key={index}>{key.toUpperCase()}</td>)}
        </StyledTr>
        </thead>

    return Thead
}
const GenericTbody = ({ arrObj }) => {
    const Tbody =
        <tbody>
        {arrObj.map((item, index) => {
            const values = Object.values(item)
            return (<tr key={index}>
                {values.map(
                    (value, index) => <StyledTd key={index + value}>{value}</StyledTd>)}
            </tr>)
        })
        }
        </tbody>
    return Tbody
}
const GenericTable = ({ arrObj }) =>
    <StyledTable>
        <GenericThead arrObj={arrObj}/>
        <GenericTbody arrObj={arrObj}/>
    </StyledTable>

export default GenericTable
