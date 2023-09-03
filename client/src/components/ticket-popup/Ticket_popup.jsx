import Modal from "react-modal";
import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import "./ticket_popup.css";

const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalContent = styled.div`
  width: 600px;
  height: 650px;
  flex-shrink: 0;
  border-radius: 16.477px;
  background: #fff;
  box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 8px;
  display: block;
`;
export default function Ticketpopup(props) {
  const styleName = props.styleName;
  const modalRef = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleModalClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleModalClick);
    return () => {
      document.removeEventListener("mousedown", handleModalClick);
    };
  }, []);

  return (
    <div>
      <div className={styleName} onClick={openModal}>
        Ticket History
      </div>

      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        ariaHideApp={false}
      >
        <ModalContent ref={modalRef}>
          <div className="heading">
            <div>
              TICKET<br></br>
              <span>HISTORY</span>
            </div>
          </div>
          <div className="req-status">
              <div className="pending">Pending</div>
              <div className="inreview">Inreview</div>
              <div className="resolved">Resolved</div>
          </div>
        </ModalContent>
      </CustomModal>
    </div>
  );
}
