import { get } from 'lodash';

export const isEmptyObject = (objectItem: any): boolean => Object.keys(objectItem).length > 0;

export const allFieldsEmpty = (objectItem: any): boolean => {
  const objectKeys: string[] = Object.keys(objectItem);
  let response: boolean = true;

  objectKeys.forEach((key: string) => {
    if (objectItem[key]) {
      response = false;
    }
  });

  return response;
};

export const allFieldsFilled = (fieldNames: string[], objectItem: any): boolean => {
  const objectKeys: string[] = Object.keys(objectItem);

  if (objectKeys.length < fieldNames.length) {
    return false;
  }

  let response: boolean = true;

  fieldNames.forEach((fieldName: string) => {
    if (!objectKeys.includes(fieldName)) {
      response = false;
    } else if (!objectItem[fieldName]) {
      response = false;
    }
  });

  return response;
};
