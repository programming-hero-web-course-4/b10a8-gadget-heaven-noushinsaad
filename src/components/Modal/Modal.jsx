import { SiTicktick } from "react-icons/si";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Modal = ({ isOpen, handleProceed, handleClose, totalPrice }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 shadow-lg lg:w-1/3 text-center">
                <SiTicktick className="text-7xl text-green-500 place-self-center mb-4" />
                <h2 className="text-3xl font-bold mb-4">Payment Successfully</h2>
                <p className="text-lg opacity-80 font-semibold">Thanks for purchasing</p>
                <p className="flex justify-center items-center gap-1 text-lg opacity-80 font-semibold">Total: <FaBangladeshiTakaSign />{totalPrice}</p>
                <div className="flex flex-col justify-center items-center md:flex-row gap-4">
                    <button onClick={handleProceed} className="btn btn-wide rounded-full mt-4">Proceed</button>
                    <button onClick={handleClose} className="btn btn-wide rounded-full mt-4">Close</button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleProceed: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default Modal;