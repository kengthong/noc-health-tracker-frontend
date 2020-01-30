import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};



const PrettoSlider = withStyles({
  root: {
    color: '#737373',
    height: 86,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default class CustomizedSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { updateSliderValue } = this.props;
        const handleChange = (event, newValue) => {
            updateSliderValue(newValue);
        };

        return (
            <div>
                <PrettoSlider 
                    valueLabelDisplay="auto" 
                    defaultValue={36.5} 
                    step={0.1}
                    max={40.0}
                    min={35.5}
                    onChange={handleChange}
                    /> 
                <div/>
            </div>
        );
    }
}