// Generated with util/create-component.js
import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

// Components
import * as S from './InformationFormStyles';
import { DatePicker, Form, Input, Select, Space } from 'antd';

// Typings
import { IAuthor, IPublisher, TRoutedInformationForm } from './InformationForm.types';

// Hooks
import useFetch from '../../hooks/useFetch';

// Constants
import { routePaths } from '../Routes';
const BOOK_FORMATS = [
  'Hardcover',
  'Paperback',
  'Mass-Market Paperback',
  'Library Binding',
  'Spiral Binding',
  'Audiobook',
];
const EDITION_LANGUAGES = ['English', 'German', 'Italian', 'Serbian'];

const InformationForm: React.FC<TRoutedInformationForm> = ({
  isDescriptionRequired = false,
  history,
  genre,
  subgenre,
}) => {
  const authorsData = useFetch('authors');
  const publishersData = useFetch('publishers');

  const useSubmit = async (values: any) => {
    const newDate = moment(values.date_published).valueOf();
    const newObj = { ...values, date_published: newDate };

    await fetch('http://localhost:4321/books', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newObj),
    })
      .then(() => {
        // Log new book to console
        console.log({
          ...newObj,
          genre,
          subgenre,
        });

        history.push(routePaths.success);
      })
      .catch(() => console.log('ERROR'));
  };

  return (
    <S.InformationForm data-testid="InformationForm">
      <Form validateTrigger="onBlur" id="myForm" onFinish={useSubmit}>
        {/* TITLE */}
        <Form.Item label="Book title" name="book_title" rules={[{ required: true, message: 'Field is required!' }]}>
          <Input />
        </Form.Item>

        {/* AUTHOR */}
        <Form.Item label="Author" name="author" rules={[{ required: true, message: 'Field is required!' }]}>
          <Select>
            {authorsData &&
              authorsData.map((author: IAuthor) => (
                <Select.Option value={author.name} key={author.id}>
                  {author.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        {/* ISBN */}
        <Form.Item label="ISBN" name="isbn" rules={[{ required: true, message: 'Field is required!' }]}>
          <Input />
        </Form.Item>

        {/* PUBLISHER */}
        <Form.Item label="Publisher" name="publisher" rules={[{ required: true, message: 'Field is required!' }]}>
          <Select>
            {publishersData &&
              publishersData.map((publisher: IPublisher) => (
                <Select.Option value={publisher.name} key={publisher.id}>
                  {publisher.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        {/* DATE PUBLISHED */}
        <Form.Item
          label="Date published"
          name="date_published"
          rules={[{ required: true, message: 'Field is required!' }]}
        >
          <DatePicker format="YYYY-MM-DD HH:mm" />
        </Form.Item>

        {/* NUMBER OF PAGES */}
        <Form.Item label="Number of pages" name="page_number">
          <Input type="number" />
        </Form.Item>

        {/* BOOK FORMAT */}
        <Form.Item label="Format" name="format">
          <Select>
            {BOOK_FORMATS.map(format => (
              <Select.Option key={format} value={format}>
                {format}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Space>
          {/* EDITION */}
          <Form.Item label="Edition" name="edition">
            <Input />
          </Form.Item>

          {/* EDITION LANGUAGE */}
          <Form.Item
            label="Edition language"
            name="edition_language"
            initialValue={EDITION_LANGUAGES[0]}
            rules={[{ required: true, message: 'Field is required!' }]}
          >
            <Select>
              {EDITION_LANGUAGES.map(lang => (
                <Select.Option key={lang} value={lang}>
                  {lang}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Space>

        {/* DESCRIPTION */}
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: isDescriptionRequired,
              message: 'Description is required!',
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </S.InformationForm>
  );
};

export default withRouter(InformationForm);
