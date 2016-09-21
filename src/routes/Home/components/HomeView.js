import React from 'react'
import s from './HomeView.scss'
import CompanyCard from '../../../components/CompanyCard'
export const DashboardView = () => (
  <div>
    <CompanyCard selected={false} title="Google" text="Social" imageUrl="https://www.seeklogo.net/wp-content/uploads/2015/09/new-google-favicon-logo.png"/>
  </div>
)

export default DashboardView
