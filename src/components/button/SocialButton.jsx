import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { Button, IconButton, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

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

const socialConfig = {
  facebook: { icon: <FacebookRoundedIcon />, color: "#1877f2" },
  google: { icon: <GoogleIcon />, color: "#ea4335" },
  youtube: { icon: <YouTubeIcon />, color: "#ff0000" },
  whatsapp: { icon: <WhatsAppIcon />, color: "#25d366" },
  telegram: { icon: <TelegramIcon />, color: "#08c" },
  linkedin: { icon: <LinkedInIcon />, color: "#0a66c2" },
  instagram: { icon: <InstagramIcon />, color: "#dd2a7b" },
  twitter: { icon: <XIcon />, color: "#111827" },
};

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
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const renderButton = () => {
    const config = socialConfig[socialType];

    if (soloIcona) {
      return (
        <Tooltip title={customText || capitalize(socialType)}>
          <IconButton
            aria-label={customText || capitalize(socialType)}
            onClick={onClickButton}
            sx={{ color: config.color }}
            {...passThroughProps}
          >
            {config.icon}
          </IconButton>
        </Tooltip>
      );
    }

    return (
      <Button
        variant="contained"
        startIcon={config.icon}
        onClick={onClickButton}
        sx={{ backgroundColor: config.color, '&:hover': { backgroundColor: config.color } }}
        {...passThroughProps}
      >
        {testoButton}
      </Button>
    );
  };

  if (socialType) {
    return renderButton();
  } else {
    return (
      <Button variant="contained" onClick={onClickButton} startIcon={<LinkRoundedIcon />} {...passThroughProps}>
        {customText ? customText : "Vai a..."}
      </Button>
    );
  }
};

SocialButton.propTypes = SocialButtonType;

export default SocialButton;
