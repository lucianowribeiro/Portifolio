/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../../common/SEO';
import Box from '../../foundation/Box';
import Modal from '../../common/Modal';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import FormMessage from '../../pattern/FormMessage';

export const WebPageContext = React.createContext({
  toogleModal: () => {},
  toogleForm: () => {},
});
export default function WebPage({
  children, seoProps, containerProps, boxProps,
}) {
  const [isOpen, setOpen] = React.useState(false);
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  return (
    <WebPageContext.Provider
      value={{
        toogleModal: () => setOpen(!isOpen),
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
      <Box {...containerProps}>
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
  children: PropTypes.node.isRequired,
};
