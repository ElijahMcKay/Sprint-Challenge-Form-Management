import React from 'react';
import Recipe from "./Recipe"; 
import { render, fireEvent } from "@testing-library/react"; 
import '@testing-library/react/cleanup-after-each';

describe('<Recipe />', () => {
    it('renders without crashing', () => {
        render(<Recipe />); 
    })
})