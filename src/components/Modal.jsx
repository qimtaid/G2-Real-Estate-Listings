const Modal = ({ children, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {children}
                <button className="btn btn-primary" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
