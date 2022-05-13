import './ModalDialogue.css';
import ModalDialogueForm from "./ModalDialogueForm";

export default function ModalDialogue({ content, setModalView }) {
    return (
        <div className="modal">
            <div className='modal-content'>
                <i onClick={() => setModalView(false)} className="fa-solid fa-xmark modal-cancel"></i>
                <h4>{content.title}</h4>
                <ModalDialogueForm fields={content.fields} button={content.button} />
            </div>
        </div>
    );
}