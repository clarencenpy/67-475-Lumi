import React from 'react'
import CompanyCard from '../../../components/CompanyCard'
import heroImage from '../assets/Lumi_noborder-01.png'

import s from './Search.scss'

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

        <div className={s.searchBoxContainer}>
          <input className={s.searchInput} type="text"
                 placeholder='Search and Add apps you use ...'
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

        <div className={s.right}>
          Did we miss something?
        </div>

      </div>



    </div>
  )
}

export default Search
