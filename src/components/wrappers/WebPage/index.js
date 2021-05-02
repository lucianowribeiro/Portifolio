/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import SEO from '../../common/SEO';
import Box from '../../foundation/Box';
import Modal from '../../common/Modal';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import FormMessage from '../../pattern/FormMessage';

export const WebPageContext = React.createContext({
  themeMode: '',
  toogleModal: () => {},
  toogleForm: () => {},
  toggleTheme: () => {},
});

export default function WebPage({
  children, seoProps, containerProps, boxProps, theme,
}) {
  const [isOpen, setOpen] = React.useState(false);
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [themeMode, setTheme] = React.useState('light');
  return (
    <WebPageContext.Provider
      value={{
        themeMode,
        toogleModal: () => setOpen(!isOpen),
        toggleTheme: () => {
          if (themeMode === 'light') setTheme('dark');
          else setTheme('light');
        },
      }}
    >
      <SEO {...seoProps} />
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
          setTimeout(() => setIsFormSubmited(false), 1000);
        }}
      >
        {(propsModal) => (
          <FormMessage
            isOpen={isOpen}
            onClose={() => {
              setOpen(false);
              setTimeout(() => setIsFormSubmited(false), 1000);
            }}
            propsModal={propsModal}
            isFormSubmited={isFormSubmited}
            setIsFormSubmited={setIsFormSubmited}
          />
        )}
      </Modal>
      <Box backgroundColor={lodash.get(theme, `${themeMode}`).background.main.color} {...containerProps}>
        <Header />
        <Box as="main" {...boxProps}>
          {children}
        </Box>
        <Footer />
      </Box>
    </WebPageContext.Provider>
  );
}
WebPage.defaultProps = {
  seoProps: {},
  containerProps: {},
  boxProps: {},
};

WebPage.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  containerProps: PropTypes.shape({
    display: PropTypes.string,
    flexDirection: PropTypes.string,
    alignItems: PropTypes.string,
    width: PropTypes.string,
  }),
  boxProps: PropTypes.shape({
    display: PropTypes.string,
    flexDirection: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
