import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './index'

/**
 * Router View
 *
 * @returns { React.FC } Router View
 */
export default function RouterView() {
  const element = useRoutes(routes)

  return <>{element}</>
}
