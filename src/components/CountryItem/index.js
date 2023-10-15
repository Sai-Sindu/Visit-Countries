import {
  CountryItemCard,
  CountryCard,
  CountryName,
  VisitedText,
  CountryVisitButton,
  Separator,
} from './styledComponents'

const CountryItem = props => {
  const {countryDetails, getVisitCountry} = props
  const {name, isVisited} = countryDetails

  const onToggleVisitStatus = () => {
    getVisitCountry(countryDetails)
  }

  return (
    <CountryItemCard>
      <CountryCard>
        <CountryName>{name}</CountryName>
        {isVisited ? (
          <VisitedText>Visited</VisitedText>
        ) : (
          <CountryVisitButton onClick={onToggleVisitStatus}>
            Visit
          </CountryVisitButton>
        )}
      </CountryCard>
      <Separator />
    </CountryItemCard>
  )
}

export default CountryItem
