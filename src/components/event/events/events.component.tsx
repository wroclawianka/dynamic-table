import { FunctionComponent, useEffect, useState } from "react";
import { Table } from 'antd';
import { mapFormSchemaToColumns } from "../../../utils";
import { useEvents, useFormSchema } from "../../../hooks";

export const Events: FunctionComponent = () => {
    const [columns, setColumns] = useState<any>([]);
    const { data: dataSource } = useEvents();
    const { data: formSchema } = useFormSchema();

    useEffect(() => {
        if (!formSchema) return
        setColumns(mapFormSchemaToColumns(formSchema))
    }, [formSchema])


    return (
        columns.length ? <Table columns={columns} dataSource={dataSource} /> : <></>
    )
};