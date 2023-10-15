import styled from 'styled-components'

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: #161624;
  padding: 20px;
  min-height: 100vh;
`
export const CountriesTitle = styled.h1`
  color: #f8fafc;
  font-size: 20px;
  margin-bottom: 0;
`
export const CountriesListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  height: 50vh;
  overflow-y: auto;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  background-color: #1f1f2f;
`
export const VisitedCountriesContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const NoCountriesVisitedText = styled.p`
  font-size: 25px;
  color: #f1f5f9;
  text-align: center;
  font-family: 'Roboto';
`
