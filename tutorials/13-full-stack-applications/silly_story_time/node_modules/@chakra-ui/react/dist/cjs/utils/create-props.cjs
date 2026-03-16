"use strict";
'use strict';

const createProps = () => (props) => Array.from(new Set(props));

exports.createProps = createProps;
