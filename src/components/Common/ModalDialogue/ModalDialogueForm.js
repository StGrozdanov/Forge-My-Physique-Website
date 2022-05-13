import './ModalDialogueForm.css';
import { v4 as uuid } from 'uuid';

export default function ModalDialogueForm({ fields, button }) {
    const inputFields = fields
        .map(field => {
            if (field['isTextArea']) {
                return (
                    <textarea
                        className='modal-input'
                        placeholder={field['placeHolder']}
                        rows={field['rows']}
                        key={uuid()}
                    />
                );
            } else {
                return (
                    <input
                        className='modal-input'
                        type="text"
                        placeholder={field['placeHolder']}
                        key={uuid()}
                    />
                );
            }
        });

    return (
        <form className="modal-form">
            {inputFields}
            <button className='modal-button'>{button}</button>
        </form>
    );
}