import React from "react";

import * as s from "./styles";
import logo from "../../assets/images/marvel-logo.png";

function footer() {
  return (
    <s.Container>
      <s.Footer>
        <div>
          <img src={logo} alt="Logo Marvel" />
          <p>Feito com toda a dedicação.</p>
          <span>Todos os Direitos Reservados.</span>
        </div>
      </s.Footer>
    </s.Container>
  );
}

export default footer;
