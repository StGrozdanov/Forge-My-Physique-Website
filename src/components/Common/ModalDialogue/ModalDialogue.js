import './ModalDialogue.css';
import ModalDialogueForm from "./ModalDialogueForm";
import registerForm from '../../../constants/modalContent/registerForm'
import { useState } from 'react';

export default function ModalDialogue({ content, setModalView }) {
    const [contentType, setContentType] = useState(content);

    function registerRedirectHandler() {
        setContentType(registerForm);
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <i onClick={() => setModalView(false)} className="fa-solid fa-xmark modal-cancel"></i>
                <h4>{contentType.title}</h4>
                <ModalDialogueForm fields={contentType.fields} button={contentType.button} />
                <footer onClick={registerRedirectHandler} className='modal-footer'>{contentType.footer}</footer>
            </div>
        </div>
    );
}