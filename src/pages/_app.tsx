import React from 'react';
import { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';
import { wrapper } from '../redux/store';
import '../styles/index.css';
import Modal from '../components/Modal';
import Header from '../components/header';

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <ToastProvider placement="bottom-left">
      <Header />
      <Component {...pageProps} />
      <Modal />
    </ToastProvider>
  );
};

export default wrapper.withRedux(MyApp);
