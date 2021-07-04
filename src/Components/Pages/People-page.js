import React from "react";
import { withRouter } from "react-router";
import Row from "../Row";
import { PersonDetails, PersonList } from "../Sw-components";

const PeoplePage = ({history, match}) => {

  const {id} = match.params

  return (
    <Row
      left={<PersonList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
