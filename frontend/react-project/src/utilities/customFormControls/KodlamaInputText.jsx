import { useField } from 'formik'
import React from 'react'
import { FormGroup, FormLabel } from 'react-bootstrap'

export default function KodlamaInputText(...props) {

    const [field, meta] = useField(props)
    console.log(meta)

    return (
        <div>
            <FormGroup onError={meta.touched && !!meta.error} >

                <input {...field} {...props}/>
                {
                    meta.touched && !!meta.error?(
                        <FormLabel> </FormLabel>
                    ):null
                }
            </FormGroup>

        </div>
    )
}
