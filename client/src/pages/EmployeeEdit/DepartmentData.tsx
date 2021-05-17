import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { employeeData } from '../EmployeeView/testData';
import { DepartmentPresentation } from './DepartmentPresentation';

export const DepartmentData: React.FC = ({}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isFormChanged, setIsFormChanged] = useState(false);

  const {
    title: employeeTitle,
    description: employeeDescription,
  } = employeeData.employee.department!;

  useEffect(() => {
    setTitle(employeeTitle);
    setDescription(employeeDescription);
  }, []);

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
    setIsFormChanged(true);
  };

  const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDescription(event.target.value);
    setIsFormChanged(true);
  };

  const saveDescription = () => {
    console.log('Saved description');
    setIsFormChanged(false);
  };

  return (
    <DepartmentPresentation
      title={title}
      onTitleChange={onTitleChange}
      description={description}
      onDescriptionChange={onDescriptionChange}
      isFormChanged={isFormChanged}
      saveDescription={saveDescription}
    />
  );
};
