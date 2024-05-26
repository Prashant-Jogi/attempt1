import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ConfirmModal = ({modal,onClose,reject,approve}) =>{
    return <>
    <Modal isOpen={modal} toggle={onClose}>
        <ModalHeader toggle={onClose}>Modal title</ModalHeader>
        <ModalBody>
          Accept or Reject changes ?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={approve}>
           Approve
          </Button>{' '}
          <Button color="secondary" onClick={reject}>
            Reject
          </Button>
        </ModalFooter>
      </Modal>
    </>
}
export default ConfirmModal