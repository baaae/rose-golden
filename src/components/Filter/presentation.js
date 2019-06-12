import React from 'react';
import { DropButton, CheckBox, Box, Form, FormField, Button } from 'grommet';
import PropTypes from 'prop-types';

const Filter = ({onFieldChange, onSubmit, onDropButtonClose, settings}) => {
  return (
    <DropButton
      onClose={onDropButtonClose}
      label="Filter"
      dropAlign={{
        top: "bottom",
        right: "right"
      }}
      dropContent={<Content onSubmit={onSubmit} onFieldChange={onFieldChange} settings={settings}/>}
      />
  )
}

Filter.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Filter;



var Content = ({onFieldChange, onSubmit, settings}) => {
  return (
    <Box width="small">
      <Form onSubmit={onSubmit}>
        {
          Object.keys(settings).map((name) => {
            const value = settings[name]
            return (
              <FormField
                key={name}
                name={name}
                component={CheckBox}
                pad
                label={name}
                checked={value}
                onChange={onFieldChange.bind(null, name )}
              />
            )
          })
        }
        <Button type="submit" primary label="Save" />
      </Form>
    </Box>
  )
}