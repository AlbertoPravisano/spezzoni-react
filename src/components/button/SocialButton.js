import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";

const SocialEnum = {
  FACEBOOK: "facebook",
  GOOGLE: "google",
  YOUTUBE: "youtube",
  WHATSAPP: "whatsapp",
  TELEGRAM: "telegram",
  LINKEDIN: "linkedin",
  INSTAGRAM: "instagram",
  TWITTER: "twitter",
};

const SocialButtonType = {
  /** stringa contenente l'url da aprire */
  href: PropTypes.string.isRequired,
  /** bool per scegliere se renderizzare il testo. Se true, mostra un icona circolare */
  soloIcona: PropTypes.bool,
  /** testo alternativo a quello del social, se link non social, alternativo a 'Vai a...' */
  customText: PropTypes.string,
};

const capitalize = (text = "") => text.charAt(0).toUpperCase() + text.slice(1);

/**
 *
 * @param {string} url
 * @example getSocialType("http://www.google.com") return 'google'
 */
const getSocialType = (url) => {
  if (url.includes("facebook")) return SocialEnum.FACEBOOK;
  else if (url.includes("google")) return SocialEnum.GOOGLE;
  else if (url.includes("youtube")) return SocialEnum.YOUTUBE;
  else if (url.includes("whatsapp")) return SocialEnum.WHATSAPP;
  else if (url.includes("telegram") || url.includes("t.me"))
    return SocialEnum.TELEGRAM;
  else if (url.includes("linkedin")) return SocialEnum.LINKEDIN;
  else if (url.includes("instagram")) return SocialEnum.INSTAGRAM;
  else if (url.includes("twitter")) return SocialEnum.TWITTER;
  else return null;
};

/**
 * Button per social con stile e icona automaticamente riconosciuti dall'url passato.
 * All'onClick apre in una nuova finestra l'url passato
 *
 * @type {React.FC<PropTypes.InferProps<SocialButtonType>>}
 * @returns UiButton con stile del social corrispondente ad href,
 * altrimenti un primary button con testo predefinito per l'apertura del link su una nuova finestra
 * @see https://react.semantic-ui.com/elements/button/#variations-social
 */
const SocialButton = ({ href, soloIcona, customText, ...passThroughProps }) => {
  const socialType = getSocialType(href);
  const testoButton = soloIcona
    ? undefined
    : customText
    ? " " + customText
    : " " + capitalize(socialType);

  React.useEffect(() => {
    if (!socialType) {
      console.log(
        "Renderizzo un button standard perchè l'href non contiene un riferimento ad un social valido"
      );
    }
  }, [socialType]);

  const onClickButton = () => {
    window.open(href, "newwindow");
  };

  const renderButton = () => {
    return (
      <React.Fragment>
        {socialType === SocialEnum.TELEGRAM && (
          <Button
            style={{ backgroundColor: "#08c", color: "white" }}
            icon
            circular={soloIcona}
            onClick={onClickButton}
            {...passThroughProps}
          >
            <Icon name={socialType} />
            {testoButton}
          </Button>
        )}
        {socialType === SocialEnum.WHATSAPP && (
          <Button
            style={{ backgroundColor: "#25d366", color: "white" }}
            icon
            circular={soloIcona}
            onClick={onClickButton}
            {...passThroughProps}
          >
            <Icon name={socialType} />
            {testoButton}
          </Button>
        )}
        {socialType !== SocialEnum.WHATSAPP &&
          socialType !== SocialEnum.TELEGRAM && (
            <Button
              color={SocialEnum[socialType.toUpperCase()]}
              icon
              circular={soloIcona}
              onClick={onClickButton}
              {...passThroughProps}
            >
              <Icon name={socialType} />
              {testoButton}
            </Button>
          )}
      </React.Fragment>
    );
  };

  if (socialType) {
    return renderButton();
  } else {
    return (
      <Button primary onClick={onClickButton} {...passThroughProps}>
        {customText ? customText : "Vai a..."}
      </Button>
    );
  }
};

SocialButton.propTypes = SocialButtonType;

export default SocialButton;
