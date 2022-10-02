import { Button, Form, Modal } from "antd"
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState } from "react";
import { useFormSchema } from "../../hooks";
// import { findFormInputByType, mapFormDataToEvent } from "./../../../utils"

export const UpdateSchema = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { data: formSchema } = useFormSchema();
    const [form] = useForm();

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
        //     const data = mapFormDataToEvent(formData, formSchema)

        //     // @ts-ignore
        //     createEvent.mutate(data)
        //     form.resetFields();
    };

    const [createSchemaForm, setCreateFormSchema] = useState([]);

    useEffect(() => {
        if (!formSchema) return
        const _createFormSchema = formSchema.map(element => ({
            name: `${element.name}-label`,
            label: "Label",
            component: "text"
        }))
        setCreateFormSchema(_createFormSchema)
    }, [formSchema])


    return (
        <>
            <Button
                type="default"
                onClick={showModal}
                style={{ marginBottom: '10px', marginLeft: '10px' }}
            >
                Update Schema
            </Button>
            <Modal
                title="Update Schema"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                {/* <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    onFinish={onFormSubmit}
                    autoComplete="off"
                    form={form}
                >
                    {formSchema ? formSchema.map((i) => findFormInputByType(i)) : null}

                </Form> */}
            </Modal>
        </>
    );
};