'use strict';

import HeaderStateActionCreators from '../actions/HeaderStateActionCreators.js';

let HeaderMixin = {
    componentDidMount() {
        let self = this;
        HeaderStateActionCreators.setConfig({
            back: true,
            title: {
                visible: true,
                text: self.header.title
            },
            add: {
                visible: true,
                handler: self.header.add
            },
            editMode: {
                visible: true,
                handler: self.header.edit.bind(self)
            }
        });
    }
};

module.exports = HeaderMixin;
