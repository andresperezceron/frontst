import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`
const StyledTh = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
const StyledTd = styled(StyledTh)``

const StyledTr = styled.tr`
  & :nth-child(even) {
   background-color: #dddddd;
`

//assert is array and have at least one object inside.
const isArrayWithOneObjectOrMore =
    (arrObj) => (Array.isArray(arrObj) && arrObj.length > 0) ? true : false

/**
 * @param arrObj , array de objetos con al menos 1 elemento.
 * @returns {*} JSX element que contiene <thead> o nada.
 **/
const GenericThead = ({ arrObj }) => {
    if (!isArrayWithOneObjectOrMore(arrObj))
        return

    //extract first element keys.
    const keys = Object.keys(arrObj[0])
    //now we can construct the thead
    const Thead =
        <thead>
        <StyledTr>
            {keys.map((key, index) => <StyledTh
                key={index}>{key.toUpperCase()}</StyledTh>)}
        </StyledTr>
        </thead>

    return Thead
}
const GenericTbody = ({ arrObj }) => {
    if (!isArrayWithOneObjectOrMore(arrObj))
        return

    const Tbody =
        <tbody>
        {arrObj.map((item, index) => {
            const values = Object.values(item)
            return (<StyledTr key={index}>
                {values.map(
                    (value, index) =>
                        <StyledTd key={index + value}>{value}</StyledTd>)}
            </StyledTr>)
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
