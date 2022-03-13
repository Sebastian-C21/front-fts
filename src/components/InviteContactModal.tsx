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
  question: string | null;
  a: string | null;
  b: string | null;
  c: string | null;
  d: string | null;
}
interface InviteContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInvite: (data: any) => void;
}
const InviteContactModal = ({
  isOpen,
  onClose,
  onInvite,
}: InviteContactModalProps) => {
  /*
  data input handeling
  */
  const [data, setData] = useState<DataTypes>({
    question: null,
    a: null,
    b: null,
    c: null,
    d: null,
  });
  useEffect(() => {
    setData({
      question: null,
      a: null,
      b: null,
      c: null,
      d: null,
    });
  }, []);

  const onChangeData = (field: "question" | "a" | "b" | "c" | "d", value: string) => {
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
    if (data.question !== null && data.a !== null && data.b !== null && data.c !== null && data.d !== null) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [data]);
  return (
    <Modal isOpen={isOpen} toggle={onClose} tabIndex={-1} centered scrollable>
      <ModalHeader className="modal-title-custom" toggle={onClose}>
        Create Poll
      </ModalHeader>
      <ModalBody className="p-4">
        <Form>
          <div className="mb-3">
            <Label htmlFor="AddContactModalemail-input" className="form-label">
              Questions
            </Label>
            <textarea
              className="form-control"
              id="AddContactModalemail-input"
              placeholder="Enter Your Questions"
              value={data["question"] || ""}
              onChange={(e: any) => {
                onChangeData("question", e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="AddContactModalemail-input" className="form-label">
              A
            </Label>
            <Input
              type="email"
              className="form-control"
              id="AddContactModalemail-input"
              placeholder="Enter A"
              value={data["a"] || ""}
              onChange={(e: any) => {
                onChangeData("a", e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="AddContactModalname-input" className="form-label">
              B
            </Label>
            <Input
              type="text"
              className="form-control"
              id="AddContactModalname-input"
              placeholder="Enter B"
              value={data["b"] || ""}
              onChange={(e: any) => {
                onChangeData("b", e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <Label
              htmlFor="AddContactModal-invitemessage-input"
              className="form-label"
            >
              C
            </Label>
            <Input
              value={data["c"] || ""}
              onChange={(e: any) => {
                onChangeData("c", e.target.value);
              }}
              className="form-control"
              id="AddContactModal-invitemessage-input"
              rows={3}
              placeholder="Enter C"
            ></Input>
          </div>
          <div className="mb-3">
            <Label htmlFor="AddContactModalname-input" className="form-label">
              D
            </Label>
            <Input
              type="text"
              className="form-control"
              id="AddContactModalname-input"
              placeholder="Enter D"
              value={data["d"] || ""}
              onChange={(e: any) => {
                onChangeData("d", e.target.value);
              }}
            />
          </div>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button type="button" color="link" className="btn" onClick={onClose}>
          Close
        </Button>
        <Button
          type="button"
          color="primary"
          disabled={!valid}
          onClick={() => onInvite(data)}
        >
          Invite
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default InviteContactModal;
