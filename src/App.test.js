const bookApiResponse = require('/mocks/books.js')
import React from 'react'
import ReactDOM from 'react-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'
import ReactTestUtils, { act } from 'react-dom/test-utils'
const server = setupServer(
    rest.get('https://www.googleapis.com/books/v1/volumes', (req, res, ctx) => {
        return res(ctx.json(bookApiResponse))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
let container;
let Input
let SearchButton
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test('loads and displays greeting', async () => {
    act(() => {
        ReactDOM.render(<App />, container)
        Input = container.querySelector('.MuiInputBase-input.MuiOutlinedInput-input')
        SearchButton = screen.getByText('Search')
    })

    act(() => {

        fireEvent.change(Input, { target: { value: 'Search Value' } })
        fireEvent.click(SearchButton)

    })
    await new Promise((resolve) => { setTimeout(resolve, 4000) })
    // await waitFor(() => container.querySelectorAll('.MuiDataGrid-cell')[1])
    expect(container.querySelectorAll('.MuiDataGrid-cell')[1]).toHaveTextContent('Fullstack React')

})