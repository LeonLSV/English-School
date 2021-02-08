import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form, Row, Col } from "antd";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { H1Title } from "../Introduccion/styled";
import { ContainerLesson } from "../../styles/container";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        // rules={[
        //   {
        //     required: true,
        //     message: `${title} is required.`,
        //   },
        // ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 0,
        }}
        onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class PlanAprendizaje extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Time",
        dataIndex: "Time",
        width: "50px",
        editable: true,
      },
      {
        title: "Listening",
        dataIndex: "Listening",
        width: "50px",
        editable: true,
      },
      {
        title: "Speaking",
        dataIndex: "Speaking",
        width: "50px",
        editable: true,
      },
      {
        title: "Writing",
        dataIndex: "Writing",
        width: "50px",
        editable: true,
      },
      {
        title: "Reading",
        dataIndex: "Reading",
        width: "50px",
        editable: true,
      },
      {
        title: "Delete?",
        dataIndex: "Delete?",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}>
              <a href="/plan-aprendizaje">Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: "0",
          Time: "Lunes",
          Listening: "",
          Speaking: "1 actividad",
          Writing: "Escribir artículo",
          Reading: "",
        },
        {
          key: "0",
          Time: "Martes",
          Listening: "Ver 1 serie",
          Speaking: "",
          Writing: "",
          Reading: "Leer artículo",
        },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      Time: "Objetivo Actividad",
      Listening: "Medible",
      Speaking: "Concreto",
      Writing: "Medible",
      Reading: "Concreto",
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <ContainerLesson>
        <Row justify="center" align="middle">
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <H1Title>Ruta de Aprendizaje</H1Title>

            <p>
              Tiempo: Conócete. ¿Qué tanto le querés invertir al estudio?
              Respondete esa pregunta y fijate metas reales según tu
              disponibilidad.
            </p>
            <p>
              Objetivos: Deben ser causa y no consecuencia. Tienen que darte una
              orientación de hacia donde vas a ir. Deben ser concretos y
              medibles según tus habilidades.
            </p>
            <h2>
              Usa la tabla de abajo👇 para agregar tus metas y sacale una
              captura de pantalla. Haz esto una vez a la semana.🌈
            </h2>
            <Input
              style={{ maxWidth: "600px", marginBottom: "20px" }}
              placeholder="¿Cual es tu motivación esta semana?"
            />
            <Button
              onClick={this.handleAdd}
              type="primary"
              style={{
                marginBottom: "20px",
              }}>
              Agregar Fila
            </Button>
            <Table
              components={components}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={dataSource}
              columns={columns}
            />
            <LinkClass to="/estrategias-para-aprender-ingles-online">
              <ButtonVolver>Volver</ButtonVolver>
            </LinkClass>
          </Col>
        </Row>
      </ContainerLesson>
    );
  }
}
export default PlanAprendizaje;
