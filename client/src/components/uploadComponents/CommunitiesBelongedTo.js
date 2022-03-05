import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const communitiesAvailable = [
    { value: 'ALU', label: 'ALU' },
    { value: 'Youth Kigali', label: 'Youth Kigali' },
    { value: 'Women in IT', label: 'Women in IT' },
    { value: 'CMU', label: 'CMU' },
    { value: 'UR', label: 'UR' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Sports central', label: 'Sports central' },
    { value: 'Work and Internship', label: 'Work and Internship' },
    { value: 'Conservation', label: 'Conservation' },
  ];

const animatedComponents = makeAnimated();

export default function CommunitiesBelongedTo() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={communitiesAvailable}
    />
  );
};