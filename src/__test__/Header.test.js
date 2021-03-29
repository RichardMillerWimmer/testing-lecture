import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Components/Header';

it('does not show the dropdown when initially mounted', () => {
    const { queryByTestId } = render(<Header />)

    const dropdown = queryByTestId('dropdown')

    expect(dropdown).toBeFalsy()
})

it('shows dropdown when the hambuger is clicked', () => {
    const { container, getByTestId } = render(<Header />)

    const hamburger = getByTestId('hamburger-button')

    fireEvent.click(hamburger)

    expect(container.textContent).toContain('Dropdown menu')
})