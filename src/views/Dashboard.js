import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSpezzoni } from "../redux/spezzoni";
import {
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Label,
  List,
} from "semantic-ui-react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, spezzoni } = useSelector((state) => ({
    user: state.user.data,
    spezzoni: state.spezzoni.data,
  }));

  React.useEffect(() => {
    dispatch(getUserSpezzoni(user.uid));
  }, [dispatch, user.uid]);

  return (
    <div>
      <Header as="h2">
        <Icon name="user" />
        <Header.Content>Profilo di {user.name}</Header.Content>
      </Header>
      <Grid columns="equal">
        <Grid.Row stretched>
          <Grid.Column>
            <Input value={user.name} fluid />
          </Grid.Column>
          <Grid.Column>
            <Input value={user.surname} fluid />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Input value={user.city} fluid />
          </Grid.Column>
          <Grid.Column>
            <Input value={user.phone} fluid />
          </Grid.Column>
          <Grid.Column>
            <Input value={user.email} fluid />
          </Grid.Column>
        </Grid.Row>
        <Header as="h2">
          <Icon name="cart" />
          <Header.Content>Spezzoni</Header.Content>
        </Header>
        {spezzoni.length > 0 ? (
          <Grid.Row stretched>
            <Divider horizontal />
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
          </Grid.Row>
        ) : (
          "Nessun spezzone nell'elenco"
        )}
      </Grid>
    </div>
  );
};

export default Dashboard;
