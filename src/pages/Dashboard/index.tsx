import React, { useState } from "react";
import classnames from "classnames";

// hooks
import { useRedux } from "../../hooks/index";

// hooks
import { useConversationUserType } from "../../hooks/index";

// component
import Leftbar from "./Leftbar";
import ConversationUser from "./ConversationUser/index";
import UserProfileDetails from "./UserProfileDetails/index";
import Welcome from "./ConversationUser/Welcome";
import Form from "reactstrap/es/Form";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";
import Modal from "reactstrap/es/Modal";

interface IndexProps {}

const Index = (props: IndexProps) => {
  // global store
  const { useAppSelector } = useRedux();
  interface DataTypes {
    name: string | null;
  }
  const [data, setData] = useState<DataTypes>({
    name: null,
  });
  const onChangeData = (field: "name", value: string) => {
    let modifiedData: DataTypes = { ...data };
    if (value === "") {
      modifiedData[field] = null;
    } else {
      modifiedData[field] = value;
    }
    setData(modifiedData);
  };

  const { selectedChat } = useAppSelector(state => ({
    selectedChat: state.Chats.selectedChat,
  }));

  const { isChannel } = useConversationUserType();
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
          <>
          <div className="app flex-row align-items-center">
          <Form>
          <div className="">
            <Label className="form-label">
              Name your channel
            </Label>
            <Input
              type="text"
              className="form-control"
              placeholder="Enter Channel Name"
              value={data["name"] || ""}
              onChange={(e: any) => {
                onChangeData("name", e.target.value);
              } } />
          </div>
        </Form><Button className="mb-3"
          type="button"
          onClick={() => {
            setShow(!show);
          } }
          > Create
          </Button>
          </div>
          </>
      ) : (
        <Leftbar />
      )}


      {/* <div
        className={classnames("user-chat", "w-100", "overflow-hidden", {
          "user-chat-show": selectedChat,
        })}
        id="user-chat"
      >
        <div className="user-chat-overlay" id="user-chat-overlay"></div>
        {selectedChat !== null ? (
          <div className="chat-content d-lg-flex">
            <div className="w-100 overflow-hidden position-relative">
              <ConversationUser isChannel={isChannel} />
            </div>
            <UserProfileDetails isChannel={isChannel} />
          </div>
        ) : (
          <Welcome />
        )}
      </div> */}
    </>
  );
};

export default Index;
