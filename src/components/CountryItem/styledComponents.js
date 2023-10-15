import styled from 'styled-components'

export const CountryItemCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const CountryCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 20px 5px 20px;
`
export const CountryName = styled.p`
  color: #f8fafc;
`
export const VisitedText = styled.p`
  color: #94a3b8;
  font-size: 15px;
  font-family: 'Roboto';
`

export const CountryVisitButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 5px 10px 5px 10px;
  border-radius: 3px;
`
export const Separator = styled.hr`
  border: 1px solid #94a3b8;
  width: 100%;
`
