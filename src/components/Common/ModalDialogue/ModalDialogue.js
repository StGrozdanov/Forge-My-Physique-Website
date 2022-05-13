import './ModalDialogue.css';
import ModalDialogueForm from "./ModalDialogueForm";

export default function ModalDialogue({ form, setModalView }) {
    return (
        <div className="modal">
            <div className='modal-content'>
                <i onClick={() => setModalView(false)} className="fa-solid fa-xmark modal-cancel"></i>
                <h4>{form.title}</h4>
                <ModalDialogueForm fields={form.fields} button={form.button} />
            </div>
        </div>
    );
}