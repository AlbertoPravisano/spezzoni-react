import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Header, Icon, Label, List } from "semantic-ui-react";

import * as spezzoniActions from "../redux/spezzoni";
import { useLoading } from "common/hooks";

const ElencoSpezzoni = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { renderLoader } = useLoading();
  const spezzoni = useSelector((state) => state.spezzoni.data);

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterString = queryParams.get("s");

    dispatch(spezzoniActions.getSpezzoniByString(filterString));
  }, [dispatch, location.search]);

  return (
    <div>
      <Header as="h2">
        <Icon name="cart" />
        <Header.Content>Spezzoni</Header.Content>
      </Header>
      {renderLoader({ inverted: true })}
      {spezzoni.length > 0 ? (
        <List as="ul">
          {spezzoni.map((spezzone) => (
            <List.Item key={spezzone.id} as="li">
              {spezzone.name} x({spezzone.quantity}){" "}
              <Label
                title={spezzone.aviable ? "Disponibile" : "Non disponibile"}
                color={spezzone.aviable ? "green" : "red"}
                circular
                empty
              />
            </List.Item>
          ))}
        </List>
      ) : (
        "Nessun spezzone nell'elenco"
      )}
    </div>
  );
};

export default ElencoSpezzoni;
