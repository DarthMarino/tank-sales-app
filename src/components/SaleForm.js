import React from 'react'
import { Form, Button, Input } from 'antd';
import { createSale } from '../api'

const SaleForm = ({ form, sales, setSales }) => {

  const { getFieldDecorator, validateFields, resetFields } = form;

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err && values.sale) {
        createNote(values.sale).then(res => {
          const newSalesArray = sales.concat([res])
          setNotes(newSalesArray)
          toast.success('Added Successfully')
          resetFields()
        })
      }
    });
  }
  
  
  return (
    <Form style={{marginBottom: '25px'}} layout="horizontal" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('sale', {
        rules: [],
        })(
          <Input
            className="sale-input"
            size="large"
            placeholder="Add New Sale"
          />,
          <Button>Create</Button>
        )}
      </Form.Item>

  </Form>
  )
}

const WrappedSaleForm = Form.create({name: 'sales_form'})(SaleForm)

export default WrappedSaleForm;