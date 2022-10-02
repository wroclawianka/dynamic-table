import { Button, Form, Modal } from "antd"
import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
import { useCreateEvent, useFormSchema } from "../../../hooks";
import { findFormInputByType, mapFormDataToEvent } from "./../../../utils"

export const CreateEvent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { data: formSchema } = useFormSchema();
    const [form] = useForm();
    const createEvent = useCreateEvent();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.submit();
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFormSubmit = (formData) => {
        const data = mapFormDataToEvent(formData, formSchema)

        // @ts-ignore
        createEvent.mutate(data)
        form.resetFields();
    };

    return (
        <>
            <Button
                type="primary"
                onClick={showModal}
                style={{ marginBottom: '10px' }}
            >
                Add Row
            </Button>
            <Modal
                title="Add Row"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    onFinish={onFormSubmit}
                    autoComplete="off"
                    form={form}
                >
                    {formSchema ? formSchema.map((i) => findFormInputByType(i)) : null}

                </Form>
            </Modal>
        </>
    );
};