import React from 'react'
import createStore from 'picostate'
import matcher from './matcher.js'
import Hypr from './Hypr.js'

/**
 * this is passed to rolaStatic as a plugin
 */
export default function HyprApp ({ state = {}, pathname, children }) {
  /**
   * mock router
   */
  const initialState = {
    ...state,
    router: {
      location: pathname,
      params: {}
    }
  }

  return (
    <Hypr store={createStore(initialState)} router={matcher([])} location={pathname}>
      {children}
    </Hypr>
  )
}
