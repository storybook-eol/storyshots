import React, { PropTypes } from 'react'

const inputStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
  width: '400px'
}

class ComponentWithRef extends React.Component {
  componentDidMount () {
    this.props.onLoad(`scrollWidth: ${this.ref.scrollWidth}`)
  }
  setRef (ref) {
    this.ref = ref
  }
  render () {
    return (
      <input
        type='text'
        value={'This component reads its scrollWidth on load.'}
        ref={r => this.setRef(r)}
        style={inputStyles}
      />
    )
  }
}

ComponentWithRef.propTypes = {
  onLoad: PropTypes.func
}

export default ComponentWithRef
