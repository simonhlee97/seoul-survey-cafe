import { render } from '@redwoodjs/testing/web'

import AboutPagePage from './AboutPagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AboutPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutPagePage />)
    }).not.toThrow()
  })
})
