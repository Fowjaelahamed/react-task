import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
const Problem2 = () => {
  const [contacts, setContacts] = useState([]);
  const [uscontacts, setUsContacts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchAllContacts = async () => {
    try {
      const response = await fetch(
        "https://contact.mediusware.com/api/contacts/"
      );
      if (response.ok) {
        const data = await response.json();
        setContacts(data.results);
      } else {
        console.error(
          "Failed to fetch contacts:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching contacts:", error.message);
    }
  };
 
  useEffect(() => {
    fetchAllContacts();
  }, []);

  console.log(uscontacts);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleShow}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            <div className="px-3">
            <div className="d-flex justify-content-between px-3 py-2 fw-bold"><div>No</div><div>Phone</div> <div>Country</div></div>
              {contacts.map((contact) => (
                <div key={contact.id} className="d-flex justify-content-between px-3 py-1"><div>{contact.id}</div><div>{contact.phone}</div> <div>{contact.country.name}</div></div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-lg btn-outline-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={handleShow}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={handleShow}
            >
              US Contacts
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Problem2;
