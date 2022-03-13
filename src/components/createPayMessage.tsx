import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

interface DataTypes {
  text: string | null;
  amount: string | null;
}
interface CreatePayMessageProps {
  isOpen2: boolean;
  onClose2: () => void;
  onInvite2: (data: any) => void;
}
const CreatePaymentMessage = ({
  isOpen2,
  onClose2,
  onInvite2,
}: CreatePayMessageProps) => {
  /*
  data input handeling
  */
  const [data, setData] = useState<DataTypes>({
    text: null,
    amount: null,
  });
  useEffect(() => {
    setData({
      text: null,
      amount: null,
    });
  }, []);

  const onChangeData = (field: "text" | "amount", value: string) => {
    let modifiedData: DataTypes = { ...data };
    if (value === "") {
      modifiedData[field] = null;
    } else {
      modifiedData[field] = value;
    }
    setData(modifiedData);
  };

  /*
  validation
  */
  const [valid, setValid] = useState<boolean>(false);
  useEffect(() => {
    if (data.text !== null && data.amount !== null) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [data]);
  return (
    <Modal isOpen={isOpen2} toggle={onClose2} tabIndex={-1} centered scrollable>
      <ModalHeader className="modal-title-custom" toggle={onClose2}>
        Create Payment Message
      </ModalHeader>
      <ModalBody className="p-4">
        <Form>
          <div className="mb-3">
            <Label htmlFor="AddContactModalemail-input" className="form-label">
              Message
            </Label>
            <Input
              type="email"
              className="form-control"
              id="AddContactModalemail-input"
              placeholder="Enter Message"
              value={data["text"] || ""}
              onChange={(e: any) => {
                onChangeData("text", e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="AddContactModalname-input" className="form-label">
              Amount
            </Label>
            <Input
              type="text"
              className="form-control"
              id="AddContactModalname-input"
              placeholder="Enter Amount"
              value={data["amount"] || ""}
              onChange={(e: any) => {
                onChangeData("amount", e.target.value);
              }}
            />
          </div>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button type="button" color="link" className="btn" onClick={onClose2}>
          Close
        </Button>
        <Button
          type="button"
          color="primary"
          disabled={!valid}
          onClick={() => onInvite2(data)}
        >
          Invite
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreatePaymentMessage;
