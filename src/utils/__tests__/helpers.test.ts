import { allFieldsEmpty, allFieldsFilled } from '../helpers';
import { get } from 'lodash';

describe('Tests for all fields empty', () => {
  it('tests for an empty object', () => {
    const result: boolean = allFieldsEmpty({});

    expect(result).toEqual(true);
  });

  it('tests for falsy when not all fields are empty', () => {
    const user = {
      firstName: 'test',
      lastName: '',
    };
    const result: boolean = allFieldsEmpty(user);

    expect(result).toEqual(false);
  });

  it('tests for truthy when all fields are empty', () => {
    const user = {
      firstName: '',
      lastName: '',
    };

    const result: boolean = allFieldsEmpty(user);

    expect(result).toEqual(true);
  });
});

describe('tests for all fields filled', () => {
  it('tests for empty object and empty array', () => {
    const result: boolean = allFieldsFilled([], {});

    expect(result).toEqual(true);
  });

  it('tests for an empty object with an non empty array', () => {
    const result: boolean = allFieldsFilled(['firstName'], {});

    expect(result).toEqual(false);
  });

  it('tets for an empty array with a non empty object', () => {
    const result: boolean = allFieldsFilled([], { firstName: 'test name' });

    expect(result).toEqual(true);
  });

  it('tests for missing fields in an object', () => {
    const result: boolean = allFieldsFilled(['firstName', 'lastName'], { firstName: 'test first name' });

    expect(result).toEqual(false);
  });

  it('tests for matching field names and object keys', () => {
    const result: boolean = allFieldsFilled(['firstName', 'lastName'], { firstName: 'example', lastName: 'test' });

    expect(result).toEqual(true);
  });

  it('tests for empty field with complete keys', () => {
    const result: boolean = allFieldsFilled(['firstName', 'lastName'], { firstName: '', lastName: 'test' });

    expect(result).toEqual(false);
  });
});
