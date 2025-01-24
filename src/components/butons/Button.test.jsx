import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
    it('calls the onClick handler when clicked', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeDefined(); 
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies the correct text color class based on the textColor prop', () => {
        render(<Button textColor="black">White Text</Button>);
        const button = screen.getByRole('button', { name: /white text/i });
        expect(button.className).toContain('text-accentBlack');
    });

    it('renders the correct text inside the button', () => {
        render(<Button>Button Text</Button>);
        const button = screen.getByRole('button', { name: /button text/i });
        expect(button).toHaveTextContent('Button Text');
    });

});