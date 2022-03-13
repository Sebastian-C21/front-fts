import React, { useEffect, useState } from "react";
import {
  Alert,
  Row,
  Col,
  Form,
  Label,
  Button,
  UncontrolledTooltip,
  Container,
} from "reactstrap";

//Social Media Imports
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// router
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";

// validations
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

// config
import config from "../../config";

// hooks
import { useProfile, useRedux } from "../../hooks/index";

//actions
import { loginUser, socialLogin } from "../../redux/actions";

// components
import NonAuthLayoutWrapper from "../../components/NonAutnLayoutWrapper";
import AuthHeader from "../../components/AuthHeader";
import FormInput from "../../components/FormInput";
import Loader from "../../components/Loader";

interface LocationTypes {
  from?: Location;
}
interface LoginProps {}
const Login = (props: LoginProps) => {
  const history = useHistory();
  //En este método se debe realizar la verificación del query param y decidir a donde redireccionar
  const routeChange = () =>{ 
    let path = `dashboard`; 
    history.push(path);
  }

  return (
      <div>
        <Container>
          <Row className="align-items-center">
          <td className="align-middle">
              <Button color="primary" className="px-4"
                onClick={routeChange}
                  >
                  Login
                </Button>
            </td>
          </Row>
        </Container>
      </div>
  );
}

export default Login;
