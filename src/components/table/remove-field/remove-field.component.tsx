import { Button, List, Modal, Typography } from "antd"
import { useState } from "react";
import { useFormSchema, useRemoveField } from "../../../hooks";

const { Text } = Typography;

export const RemoveField = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { data: formSchema } = useFormSchema();
    const removeFormField = useRemoveField()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const removeField = (id) => {
        removeFormField.mutate(id)
    }

    type Item = {
        name: string,
        label: string,
        id: string
    }

    return (
        <>
            <Button
                type="default"
                onClick={showModal}
                style={{ marginBottom: '10px', marginLeft: '10px' }}
            >
                Remove field
            </Button>
            <Modal
                title="Remove field"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <List
                    dataSource={formSchema}
                    renderItem={({name, label, id}: Item) => (<List.Item key={name}>
                        <Text>{label}</Text>
                        <Button onClick={() => removeField(id)}>Remove</Button>
                    </List.Item>)} />
            </Modal>
        </>
    );
};