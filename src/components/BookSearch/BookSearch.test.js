import React from 'react'
import BookSearch from './BookSearch.component'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
test('loads BookSearch component and checks existence of search button', async () => {
    render(<BookSearch />)

    expect(screen.getByText('Search')).toBeInTheDocument();
})