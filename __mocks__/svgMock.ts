import React from 'react'

const ReactComponent = (props: { 'data-testid': string } & React.SVGProps<SVGSVGElement>) => {
  const testId = props['data-testid'] || 'mock-svg'
  return React.createElement('svg', { ...props, 'data-testid': testId })
}

export { ReactComponent }
export default 'svg-mock'
