import React, { useRef, useState } from 'react'
import JoditEditor from "jodit-react";
import { useForm } from 'react-hook-form';

const JoditReact = () => {
    const editor = useRef(null);
    const { register } = useForm();

    const [content, setContent] = useState();
    const config = {
        readonly: false,
        height: 400
    };
    const handleUpdate = (event) => {
        const editorContent = event.target.innerHTML;
        setContent(editorContent);
    };
    return (
        <div>
            <JoditEditor
                ref={editor}
                placeholder="category"
                config={config}
                onBlur={handleUpdate}
                {...register("description")}
                onChange={(newContent) => { }}
            />
            {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        </div>
    )
}

export default JoditReact