import React, { useEffect, useState } from 'react';
import { OnChangeSelect, SectionProp } from '../../../types/types';
import { FormProject } from '../../../modules/components/FormProject';
import { GeneralErrorText as ErrorText } from '../../../text';

const initialProject = {
  id: 0,
  name: '',
  description: '',
};

export const SectionProject = ({ setIsFormComplete }: SectionProp) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState(initialProject);

  const onChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    setProject((project) => {
      return { ...project, [name]: value };
    });
  };

  const onErrorChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    let errorText = '';

    switch (name) {
      case 'name':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
    }

    setErrors((error) => {
      return {
        ...error,
        [name]: errorText,
      };
    });
  };

  useEffect(() => {
    let isValid = true;

    if (project.name === '' || errors.name) {
      isValid = false;
    } else if (errors.name) {
      isValid = false;
    }

    setIsFormComplete!(isValid);
  }, [errors]);

  return (
    <FormProject
      project={project}
      errors={errors}
      onChange={onChange}
      onErrorChange={onErrorChange}
    />
  );
};
