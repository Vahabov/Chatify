import React from "react";
import { Modal, Form, Button, Label } from "semantic-ui-react";
import { useFirebase } from 'react-redux-firebase';
import { Formik } from 'formik';
import { useSelector } from 'react-redux'
import * as Yup from 'yup';

const ChanelSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),

    description: Yup.string()
        .required('Required'),
});


const CreateChannelForm = ({ open, onClose, onOpen }) => {


    const profile = useSelector(state => state.firebase.profile)
    const firebase = useFirebase();

    const onSubmitForm = ({ name, description }) => {
        firebase.push('channels', {
            name,
            description,
            createdBy: {
                name: profile.name,
                avatar: profile.avatar
            }
        })
        onClose()
    }
    return (
        <Modal onClose={onClose} onOpen={onOpen} open={open}>
            <Modal.Header>Create new channel</Modal.Header>
            <Modal.Content>
                <Formik
                    initialValues={{ name: '', description: '' }}
                    validationSchema={ChanelSchema}
                    onSubmit={onSubmitForm}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                icon="mail"
                                iconPosition="left"
                                name="name"
                                placeholder="#General"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {
                                (errors.name && touched.name && errors.name) &&
                                <Label basic color='red' pointing>
                                    {errors.name && touched.name && errors.name}
                                </Label>
                            }
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                name="description"
                                placeholder="#It is a channel where all kinds of general topics can be discussed."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            {
                                (errors.description && touched.description && errors.description) &&
                                <Label basic color='red' pointing>
                                    {errors.description && touched.description && errors.description}
                                </Label>
                            }
                            <Button
                                style={{ width: '100%' }}
                                content="Create"

                                icon="checkmark"
                                positive
                                type="submit"
                            />
                        </Form>
                    )}

                </Formik>
            </Modal.Content>
            <Modal.Actions>
                <Button color="black" onClick={() => onClose()}>Close</Button>

            </Modal.Actions>
        </Modal>
    );
};

export default CreateChannelForm;