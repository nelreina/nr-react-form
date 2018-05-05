import React from 'react';
import List from 'nr-react-list';
import { css } from 'emotion';
import { keys } from 'lodash';
import FieldItem from './FieldItem';

const getFieldArrayCss = col => `
flex-basis: 90%;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(${col}, 1fr);
`;

const RenderFieldArray = props => {
  const { arrayFields, fields, parent, legend } = props;
  const facss = css`
    ${getFieldArrayCss(keys(arrayFields).length)};
  `;
  return (
    <div
      className={css`
        margin-bottom: 1em;
      `}
    >
      <legend>{legend}</legend>
      <div
        className={css`
          padding: 1em 0.5em;
          border: 1px #dddddd solid;
          border-radius: 0.5em;
        `}
      >
        {fields.map((fieldname, idx) => {
          return (
            <div className="field-row" key={idx}>
              <div className={facss}>
                <List
                  {...props}
                  of={FieldItem}
                  iterator={arrayFields}
                  keyname="name"
                  fieldname={fieldname}
                />
              </div>
              <button
                className="btn btn-danger"
                onClick={() => fields.remove(idx)}
              >
                -
              </button>
            </div>
          );
        })}
        <button className="btn btn-light" onClick={() => fields.push()}>
          + {parent}
        </button>
      </div>
    </div>
  );
};

export default RenderFieldArray;
