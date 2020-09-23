// Generated with util/create-component.js
import React from 'react';

// Components
import * as S from './NewSubgenreStyles';

// Typings
import { INewSubgenreProps } from './NewSubgenre.types';
import { Checkbox, Form, Input } from 'antd';

const NewSubgenre: React.FC<INewSubgenreProps> = ({ parentGenre, handleAfterSubmit }) => {
  const handleSubgenreCreation = async (values: { name: string; isDescriptionRequired: boolean }) => {
    const newGenreId = Math.floor(Math.random() * 100); // Mock ID assignment, this would be handled by the BE
    const newGenre = {
      id: newGenreId, // Mock ID assignment, this would be handled by the BE
      name: values.name,
      isDescriptionRequired: values.isDescriptionRequired || false,
    };

    await fetch(`http://localhost:4321/genres/${parentGenre.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...parentGenre,
        subgenres: [...parentGenre.subgenres, newGenre],
      }),
    }).then(() => handleAfterSubmit(values.name));
  };

  return (
    <S.NewSubgenre data-testid="NewSubgenre">
      <Form
        id="newSubgenreForm"
        onFinish={handleSubgenreCreation}
        validateTrigger="onBlur"
        style={{ textAlign: 'left' }}
      >
        <Form.Item name="name" rules={[{ required: true, message: 'Name is required!' }]}>
          <Input type="text" placeholder="Subgenre name" />
        </Form.Item>

        <Checkbox name="isDescriptionRequired">Description is required for this subgenre</Checkbox>
      </Form>
    </S.NewSubgenre>
  );
};

export default NewSubgenre;
