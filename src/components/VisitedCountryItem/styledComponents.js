import styled from 'styled-components'

export const VisitedCountryCard = styled.li`
  background-color: #1f1f2f;
  width: 25%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const VisitedCountryImg = styled.img`
  height: 150px;
`
export const DetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 10px 0px 10px;
`

export const CountryName = styled.p`
  color: #f8fafc;
  font-size: 15px;
`
export const RemoveButton = styled.button`
  border: 1px solid #94a3b8;
  border-radius: 3px;
  background-color: transparent;
  color: #f8fafc;
  outline: none;
  cursor: pointer;
  padding: 5px;
`
