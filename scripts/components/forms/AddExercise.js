'use strict';

import React from 'react/addons';
import ValidatedInput from './ValidatedInput';
import ExerciseStoreActionCreators from '../../actions/ExerciseStoreActionCreators';
import AppStateActionCreators from '../../actions/AppStateActionCreators';

let AddExercise = React.createClass({
    mixins: [React.addons.PureRenderMixin],

    getInitialState() {
        return {};
    },

    handleSubmit() {
        if (this.props.edit) {
            ExerciseStoreActionCreators.updateExercise({
                id: this.props.exercise.id,
                label: this.refs.name.getDOMNode().value
            });
        } else {
            ExerciseStoreActionCreators.addExercise(this.refs.name.getDOMNode().value);
        }
        AppStateActionCreators.finishTraining();
        AppStateActionCreators.closeModal();
    },

    handleCancel() {
        AppStateActionCreators.closeModal();
    },

    render() {
        let value = this.props.edit ? this.props.exercise.label : '';

        return (
           <div className='form exercises'>
               <h1>Add Exercise</h1>
               <div>
                   <ValidatedInput validator='string' ref='name'
                    value={value} placeholder='name' className='nameField' />
               </div>
               <div>
                   <button className='submitButton' onClick={this.handleSubmit}>Submit</button>
                   <button className='cancelButton' onClick={this.handleCancel}>Cancel</button>
               </div>
           </div>
        );
    }
});

module.exports = AddExercise;
