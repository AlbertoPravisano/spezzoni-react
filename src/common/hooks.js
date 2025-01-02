import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";

export const useLoading = () => {
  const loading = useSelector(
    (state) => state.user.loading || state.spezzoni.loading
  );
  const renderLoader = (props) => (
    <Fragment>
      {loading && (
        <Dimmer active inverted={props?.inverted}>
          <Loader inverted={props?.inverted} content="Caricamento" />
        </Dimmer>
      )}
    </Fragment>
  );

  return { loading, renderLoader };
};
