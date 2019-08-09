import React from 'react';
import Recipe from "./Recipe"; 
import { render, fireEvent } from "@testing-library/react"; 
import '@testing-library/react/cleanup-after-each'; 
import { isMainThread } from 'worker_threads';

describe('<Recipes />', () => {
    it('renders without crashing', () => {
        render(<Recipe />); 
    })
})