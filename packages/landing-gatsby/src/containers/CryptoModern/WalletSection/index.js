import React from 'react';
import Text from 'common/components/Text';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { ContentWrapper } from './walletSection.style';
import WalletImg from 'common/assets/image/cryptoModern/illustration2.png';
import BtnIcon1 from 'common/assets/image/cryptoModern/apple.png';
import BtnIcon2 from 'common/assets/image/cryptoModern/playstore.png';

const WalletPortal = () => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoModernJson {
        WalletFeatures {
          id
          title
          icon {
            publicURL
          }
        }
      }
    }
  `);
  console.log(Data, 'cre');
  return (
    <SectionWrapper id="wallet">
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={WalletImg} alt="Wallet" />
          </div>
          <div className="content">
            <Heading content="Our wallet is built for the cryptocurrency  beginner" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit elit sed eiu Lorem ipsum dolor sit ." />
            <div className="walletfeatures">
              <Fade up>
                {Data.cryptoModernJson.WalletFeatures.map((feature, index) => (
                  <FeatureBlock
                    key={`feature_point-${index}`}
                    icon={
                      <img
                        src={feature.icon ? feature.icon.publicURL : ''}
                        alt="icon "
                      />
                    }
                    iconPosition="left"
                    title={<Text content={feature.title} />}
                  />
                ))}
              </Fade>
            </div>
            <div className="btnGroups">
              <Button
                title="APP STORE"
                variant="textButton"
                icon={<img src={BtnIcon1} alt="icon" />}
                iconPosition="left"
                className="appStore"
              />
              <Button
                title="PLAY STORE"
                variant="textButton"
                icon={<img src={BtnIcon2} alt="icon" />}
                iconPosition="left"
                className="playStore"
              />
            </div>
            <Text
              className="windowsAllert"
              content="*Windows app coming soon"
            />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WalletPortal;
