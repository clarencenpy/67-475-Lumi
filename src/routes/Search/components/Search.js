import React from 'react'
import CompanyCard from '../../../components/CompanyCard'
import heroImage from '../assets/Lumi_noborder-01.png'
import Button from '../../../components/Button'
import _ from 'underscore'
import s from './Search.scss'

const getNumSelected = (results) => {
  let numSelected = 0
  _.each(results, result => {
    if (result.selected) numSelected++
  })
  return numSelected
}

const getPlural = (numSelected) => {
  if (numSelected == 1) return 'app selected'
  return 'apps selected'
}

const getActionBtnText = (numSelected) => {
  if (numSelected <= 1) {
    return `View Policy`
  } else {
    return `Compare Policies`
  }
}

export const Search = (props) => {
  return (
    <div>

      <div className={s.heroContainer}>
        <img className={s.heroImage} src={heroImage} />
        <div className={s.heroText}>
          <div className={s.large}>Lumi Summarizer</div>
          <div className={s.small}>See and Compare Privacy Notices the Easy Way</div>
        </div>
      </div>

      <div className={s.root}>

        <div className={s.left}>
          <div className={s.searchBoxContainer}>
            <input className={s.searchInput} type="text"
                   placeholder='Type here to filter Apps...'
                   onChange={props.applySearch.bind(this)}
            />
          </div>
          <div className={s.searchContainer}>
            {
              props.results.map(result => (
                <CompanyCard selected={result.selected}
                             title={result.title}
                             text={result.text}
                             imageUrl={result.imageUrl}
                             onClick={props.toggleCompany.bind(this, result.title)}
                />
              ))
            }
          </div>
        </div>

        <div className={s.right}>
          <div className={s.actionPanel}>
            <div className={s.displayText}>{`${getNumSelected(props.results)} ${getPlural(getNumSelected(props.results))}`}</div>
            <div className={s.buttonContainer}>
              <Button primary large block onClick={props.showCompareView}>{getActionBtnText(getNumSelected(props.results))}</Button>
              <Button primary large block marginTop onClick={props.showCompareView}>Add to your list</Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search
