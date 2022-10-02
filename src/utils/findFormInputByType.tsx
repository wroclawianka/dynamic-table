import { DatePicker, Form, Input, Select } from "antd"
import TextArea from "antd/lib/input/TextArea";

const { RangePicker } = DatePicker;

export const findFormInputByType = (item) => {
    const { name, label, component } = item;
    switch (component) {
        case "text":
            return (
                <Form.Item
                    label={label}
                    name={name}
                    children={<Input />}
                />
            )
        case "select":
            return (
                <Form.Item
                    label={label}
                    name={name}
                    children={<Select options={item.options} />} />
            )
        case "range_picker":
            return (
                <Form.Item
                    label={label}
                    name={name.join("_")}
                    children={<RangePicker />}
                />
            )
        case "textarea":
            return (
                <Form.Item
                    label={label}
                    name={name}
                    children={<TextArea />}
                />
            )
    }
}