import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import ComponentWithRef from './ComponentWithRef'

const createNodeMock = element => (element.type === 'input') ? { scrollWidth: 123 } : null

const mockedRefStory = () => (
  <ComponentWithRef onLoad={action('component mount')} />
)
mockedRefStory.options = { createNodeMock }

storiesOf('Component with ref', module).add('on mount', mockedRefStory)
