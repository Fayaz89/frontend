import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';
import Limits from './Limits';
import FamilyManagement from './FamilyManagement';
import Cards from './Cards';

// Test for App.js
test('renders App component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Footer/i)).toBeInTheDocument();
});

// Test for Limits.js
test('renders Limits component', () => {
  render(<Limits />);
  expect(screen.getByText(/Name/i)).toBeInTheDocument();
  expect(screen.getByText(/View Limit/i)).toBeInTheDocument();
});

// Test for Dashboard.js
test('renders Dashboard component', () => {
  render(<Dashboard />);
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});

// Test for Limits.js


// Test for FamilyManagement.js
test('renders Family Management component', () => {
  render(<FamilyManagement />);
  expect(screen.getByText(/Family Management/i)).toBeInTheDocument();
  expect(screen.getByText(/Add Family/i)).toBeInTheDocument();
});

// Test for Cards.js
test('renders Cards component', () => {
  render(<Cards />);
  expect(screen.getByText(/Cards/i)).toBeInTheDocument();
  // Example of checking for dynamically loaded data
  expect(screen.queryByText(/Card Number/i)).not.toBeInTheDocument(); // before data loads
});
