import ReachShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import Header from '../../components/Header'

test('Should render Header correctly ', () => {
    const renender = new ReachShallowRenderer();
    renender.render(<Header />)
    expect(renender.getRenderOutput()).toMatchSnapshot()
})