import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import './styles/globals.css'
import { Footer, Header, PageContainer } from './components/layout';
import HomePage from './pages/HomePage';
import WebProjectsPage from './pages/WebProjectsPage';
import ContactPage from './pages/ContactPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <PageContainer>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/web-projects" element={<WebProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />

    </Routes>
    </PageContainer>

    <Footer />


    </BrowserRouter>
  </StrictMode>,
)
