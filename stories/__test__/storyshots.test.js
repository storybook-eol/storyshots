import initStoryshots from '../../src'

function createNodeMock (element) {
  if (element.type === 'input') {
    return { scrollWidth: 123 }
  }
  return null
}

initStoryshots({ rendererOptions: { createNodeMock } })
