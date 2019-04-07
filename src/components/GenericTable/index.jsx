import React from 'react'

/**
 *
 * @param arrObj , array de objetos que tienen que ser todos iguales.
 * @returns {*} JSX element que contiene <thead>
 *                                          <tr>
 *                                              <td>key<td>
 *                                           </tr>
 */
const GenericThead = ({arrObj}) => {
  //assert is array and have at least one object inside.
  if (!Array.isArray(arrObj) || !arrObj.length > 0) {
    return
  }
  //extract first element keys.
  const keys = Object.keys(arrObj[0])

  //now we can construct the thead
  const Thead =
    <thead>
    <tr>
      {keys.map((key, index) => <td key={index}>{key.toUpperCase()}</td>)}
    </tr>
    </thead>

  return Thead
}
const GenericTbody = ({ arrObj }) => {
  const Tbody =
    <tbody>
    {arrObj.map((item,index) => {
      const values = Object.values(item)
      return (<tr key={index}>
        {values.map((value,index) => <td key={index+value} >{value}</td>)}
      </tr>)
    })
    }
    </tbody>
  return Tbody
}
const Index = ({ arrObj }) =>
  <table>
    <GenericThead arrObj={arrObj}/>
    <GenericTbody arrObj={arrObj}/>
  </table>

export default Index
