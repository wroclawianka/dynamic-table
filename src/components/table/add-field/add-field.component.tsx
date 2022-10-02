import { Button, Form, Modal } from "antd"
import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
import { useAddField } from "../../../hooks/mutations/form-schema/add-field";
import { findFormInputByType } from "../../../utils";

export const AddField = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = useForm();
    const addField = useAddField();

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

    // TODO: random ID
    const onFormSubmit = (formData) => {
        const { label } = formData;
        const data = { ...formData, name: label, id: label };
        addField.mutate(data);
        form.resetFields();
    };

    const createNewFieldForm = [
        {
            "name": "label",
            "label": "Label",
            "component": "text"
        },
        {
            "name": "component",
            "component": "select",
            "label": "Component",
            "options": [
                {
                    "label": "Text",
                    "value": "text"
                },
                {
                    "label": "Textarea",
                    "value": "textarea"
                }
            ]
        }
    ]

    return (
        <>
            <Button
                type="default"
                onClick={showModal}
                style={{ marginBottom: '10px', marginLeft: '10px' }}
            >
                Add field
            </Button>
            <Modal
                title="Add field"
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
                    {createNewFieldForm.map((i) => findFormInputByType(i))}
                </Form>
            </Modal>
        </>
    );
};