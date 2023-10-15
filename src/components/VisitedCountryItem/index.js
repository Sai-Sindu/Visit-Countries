import {
  VisitedCountryCard,
  VisitedCountryImg,
  DetailsCard,
  CountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountryItem = props => {
  const {VisitedCountryDetails, removeVisitedCountry} = props
  const {imageUrl, name} = VisitedCountryDetails

  const onClickRemove = () => {
    removeVisitedCountry(VisitedCountryDetails)
  }

  return (
    <VisitedCountryCard>
      <VisitedCountryImg src={imageUrl} alt="thumbnail" />
      <DetailsCard>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </DetailsCard>
    </VisitedCountryCard>
  )
}

export default VisitedCountryItem
